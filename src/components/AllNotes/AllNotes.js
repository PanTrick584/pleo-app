import React, {useState} from 'react'
import {connect} from 'react-redux'
import { EDIT_NOTE, DELETE_NOTE } from '../../redux/actions'
import { StyledAllNotesContainer } from '../../styled/styledAllNotesContainer/StyledAllNotesContainer'
import { StyledAllNotesBox } from '../../styled/styledAllNotesContainer/styledAllNotesBox'

import { StyledForm } from '../../styled/styledForm/StyledForm'
import { StyledFormBox } from '../../styled/styledForm/StyledFormBox'
import { StyledFormTextarea } from '../../styled/styledForm/StyledFormTextarea'
import { StyledFormInput } from '../../styled/styledForm/StyledFormInput'
import { StyledFormSelect } from '../../styled/styledForm/StyledFormSelect'
import { StyledFormOption } from '../../styled/styledForm/StyledFormOption'
import { StyledFormButton } from '../../styled/styledForm/StyledFormButton'
import { StyledAllNotesSingle } from '../../styled/styledAllNotesContainer/styledAllNotesSingle'

const AllNotes = ({ notes, editNote, deleteNote, colors }) => {

    const [oldNote, setOldNote] = useState('')
    const [noteID, setNoteID] = useState()
    const [editor, setEditor] = useState(false)
    const [noteEdit, setNoteEdit] = useState({
        title: '',
        desc: '',
        color: ''
    });
    const handleEdit = (note, id) => {
        setEditor(true)
        setOldNote(note)
        setNoteID(id)
    }
    const handleEditNote = (e) => {
        e.preventDefault();
        console.log("NEW NOTE: ", noteEdit)
        editNote( noteEdit, noteID );
        setOldNote('')
        setNoteEdit({
            title: '',
            desc: '',
            color: ''
        })
        setEditor(false)
    }
    const handleDelete = note => {
        deleteNote(note)
    }
    console.log("NOTES", JSON.parse(localStorage.getItem("notes")))
    return (
        <StyledAllNotesContainer>
            <StyledAllNotesBox>
            {notes.length > 0 ? notes.map((note, id) => {
                return <StyledAllNotesSingle bg={note.color} key={id}>
                            <h3>{note.title}</h3>
                            <p>{note.desc}</p>
                            <div>
                            <button onClick={() => handleEdit(note, id)} >E</button>
                            <button onClick={() => handleDelete(note)} >X</button>
                            </div>
                        </StyledAllNotesSingle>
            }) : ""}
            </StyledAllNotesBox>
            {editor ? <StyledAllNotesBox>
                <StyledForm onSubmit={ (e) => handleEditNote(e) } >
                    <StyledFormBox>
                        <label htmlFor="title" >Nazwa notatki</label>
                        <StyledFormInput defaultValue={oldNote.title} type="text" name="title" onChange={ (e) => setNoteEdit( {...noteEdit, title: e.target.value} ) }/>
                    </StyledFormBox>
                    <StyledFormBox>
                        <label htmlFor="note">Wprowadź treść notatki</label>
                        <StyledFormTextarea defaultValue={oldNote.desc} name="note" onChange={ (e) => setNoteEdit( {...noteEdit, desc: e.target.value} ) }/>
                    </StyledFormBox>
                    <StyledFormSelect onChange={ (e) => setNoteEdit( {...noteEdit, color: e.target.value} ) }>
                        <StyledFormOption defaultValue hidden="hidden">Wybierz kolor</StyledFormOption>
                        {colors.map((color, id) => {
                            return <StyledFormOption key={id} value={color.value}>{color.name}</StyledFormOption>
                        })}
                    </StyledFormSelect>
                    <StyledFormButton>Zatwierdź edycję notatki</StyledFormButton>
                </StyledForm>
            </StyledAllNotesBox> : ""}
        </StyledAllNotesContainer>
    )
}
const mapStateToProps = state => {
    return {
        notes: state.notes,
        colors: state.colors
    }
}
const mapDispatchToProps = dispatch => {
    return {
        editNote: (note, noteID) => dispatch( {type: EDIT_NOTE, payload: { note, noteID }}),
        deleteNote: (note) => dispatch( {type: DELETE_NOTE, payload: { note }}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllNotes)
