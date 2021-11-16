import React, { useState } from 'react'
import { connect } from 'react-redux';
import { ADD_COLOR } from '../../redux/actions';
import { StyledAllNotesContainer } from '../../styled/styledAllNotesContainer/StyledAllNotesContainer';
import { StyledForm } from '../../styled/styledForm/StyledForm';
import { StyledFormButton } from '../../styled/styledForm/StyledFormButton';
import { StyledFormInput } from '../../styled/styledForm/StyledFormInput';

const Settings = ({ colors, setNewColor }) => {

    const [colorName, setColorName] = useState();
    const [colorValue, setColorValue] = useState();
    const [submited, setSubmited] = useState(false);

    const styleLabel = {
        marginTop: '2rem'
    }

    const handleColor = e => {
        e.preventDefault();
        setNewColor(colorName, colorValue)
        setSubmited(true)
    } 
    console.log(colors)
    console.log("COLORS", JSON.parse(localStorage.getItem("colors")))
    return (
        <StyledAllNotesContainer>
            <StyledForm action="/" onSubmit={(e) => handleColor(e)}>
                <label htmlFor="name">Wprowadź nazwę koloru</label>
                <StyledFormInput name="name" onChange={ (e) =>  setColorName(e.target.value)}/>
                <label style={ styleLabel} htmlFor="value" >Wprowadź wartość koloru w hex, np. #2e2e2e</label>
                <StyledFormInput name="value" onChange={ (e) =>  setColorValue(e.target.value)}/>
                <StyledFormButton>Zatwierdź</StyledFormButton>
                {submited ? <div>Kolor dodany! Możesz teraz dodać go do tła notatki :)</div> : ''}
            </StyledForm>
        </StyledAllNotesContainer>
    )
}
const mapStateToProps = state => {
    return {
        colors: state.colors
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setNewColor: ( name, value ) => dispatch({type: ADD_COLOR, payload: { name, value }})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Settings)
