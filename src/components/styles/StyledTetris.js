import styled from 'styled-components'

import bckgImg from '../../images/2679820.jpg'

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bckgImg}) #000;
    background-size: cover;
    background-repeat: no-repeat;
    overflow:hidden;
`

export const StyledTetris = styled.div`
    display: flex;
    aligh-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    min-width: 50vw;
    max-width: 80vw;
    place-content: center;

    aside {
        width: 100%;
        max-width: 240px;
        display: block;
        padding: 0 20px;
    }
`
