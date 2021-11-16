import { 
    ADD_NOTE,
    EDIT_NOTE,
    DELETE_NOTE,
    ADD_COLOR
} from '../actions'

function reducer ( state, action ) {
    if( action.type === ADD_NOTE ) {
        let note = action.payload.note;
        console.log(typeof state.notes)
        return { ...state, notes: [...state.notes, note] }
    }
    if( action.type === EDIT_NOTE ) {
        let noteEdited = action.payload.note;
        let ID = action.payload.noteID;
        let newNotes = state.notes.map( (note, id) => {
            if(id === ID) {
               return ({
                   title : noteEdited.title !== '' ? noteEdited.title : note.title,
                   desc : noteEdited.desc !== '' ? noteEdited.desc : note.desc,
                   color : noteEdited.color !== '' ? noteEdited.color : note.color
               })
            }
            return note
        } )
        return { ...state, notes: newNotes }
    }
    if( action.type === DELETE_NOTE ) {
        let noteDeleted = action.payload.note;
        let filteredNotes = state.notes.filter( note => note !== noteDeleted )
        return { ...state, notes: filteredNotes }
    }
    if( action.type === ADD_COLOR ) {
        let name = action.payload.name;
        let value = action.payload.value;
        return { ...state, colors: [...state.colors, {name, value}] }
    }    
    return state;
}

export default reducer;