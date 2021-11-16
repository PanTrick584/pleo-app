import styled from 'styled-components'

export const StyledFormInput = styled.input`
    border: none;
    border-bottom: 2px solid #2e2e2e;
    margin-top: 1rem;
    width: 300px;
    font-size: 1rem;
    &::focus-visible {
        outline: none;
        outline-color: none;
        outline-width: 0;
        border: none;
        border-bottom: 2px solid #2e2e2e;
    }
`