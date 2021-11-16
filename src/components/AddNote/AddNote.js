import React, {useState} from 'react'
import {connect} from 'react-redux'
import {ADD_NOTE} from '../../redux/actions'
import { StyledForm } from '../../styled/styledForm/StyledForm'
import { StyledFormBox } from '../../styled/styledForm/StyledFormBox'
import { StyledFormInput } from '../../styled/styledForm/StyledFormInput'
import { StyledFormTextarea } from '../../styled/styledForm/StyledFormTextarea' 
import { StyledFormSelect } from '../../styled/styledForm/StyledFormSelect'
import { StyledFormOption } from '../../styled/styledForm/StyledFormOption'
import { StyledFormButton } from '../../styled/styledForm/StyledFormButton'

const AddNote = ({colors, addNote }) => {

    const [note, setNote] = useState({
        title: '',
        desc: '',
        color: ''
    });
    const [check, setCheck] = useState(false)
    
    const handleAddNote = (e) => {
        e.preventDefault();
        addNote( note );
        setNote({
            title: '',
            desc: '',
            color: ''
        })
    }
    return (
        <StyledForm onSubmit={ (e) => handleAddNote(e) } >
            <StyledFormBox>
                <label htmlFor="title" >Nazwa notatki</label>
                <StyledFormInput defaultValue={note.title} type="text" name="title" onChange={ (e) => setNote( {...note, title: e.target.value} ) }/>
            </StyledFormBox>
            <StyledFormBox>
                <label htmlFor="note">Wprowadź treść notatki</label>
                <StyledFormTextarea defaultValue={note.desc} name="note" onChange={ (e) => setNote( {...note, desc: e.target.value} ) }/>
            </StyledFormBox>
            <StyledFormSelect  onChange={ (e) => setNote( {...note, color: e.target.value} ) }>
                <StyledFormOption defaultValue hidden="hidden">Wybierz kolor</StyledFormOption>
                {colors.map((color, id) => {
                    return <StyledFormOption key={id} value={color.value}>{color.name}</StyledFormOption>
                })}
            </StyledFormSelect>
            <StyledFormButton onClick={() => setCheck(true)}>Dodaj notatkę</StyledFormButton>
            {check? <div>Notatka pomyślnie dodana!</div> : ''}
        </StyledForm>
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
        addNote: (note) => dispatch( {type: ADD_NOTE, payload: { note }})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddNote)
