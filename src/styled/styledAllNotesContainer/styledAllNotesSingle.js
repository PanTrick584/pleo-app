import styled from 'styled-components'

export const StyledAllNotesSingle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    /* flex: 0 0 40%; */
    height: 100%;
    border: 2px solid #2e2e2e;
    border-radius: 20px;
    padding: .8rem;
    margin-bottom: .1rem;
    background-color: ${props => props.bg};
    width: 44%;

    & h3 {
        text-transform: uppercase;
    }
    & p {
        font-family: inherit;
    }
    & div {
        display: flex;
        position: absolute;
        top: .4rem;
        right: .4rem;
    }
    & button {
        height: 30px;
        width: 30px;
        border: none;
        border-radius: 100%;
        background-color: ${ props => props.editor? "green" : "#2e2e2e"};
        color: #c2c2c2;
        /* padding: .4rem; */
        cursor: pointer;
        transition: all .2s;
        &:hover {
            background-color: #4e4e4e;
        }
        &:first-of-type {
            margin-right: .3rem;
        }
    }
`