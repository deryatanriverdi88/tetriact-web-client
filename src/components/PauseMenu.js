import React from 'react'
import Button from './Button'
import { StyledPopUpWrapper, StyledPauseMenu, StyledCloseButton } from './styles/StyledPopUps'

const PauseMenu = ({callback}) => {
    return (
        <StyledPopUpWrapper>
            <StyledPauseMenu >
                <h2> Game Paused </h2>
                <Button text='Resume Game' width={45} margin={120} callback={callback} />
            </StyledPauseMenu>
        </StyledPopUpWrapper>
    )
}

export default PauseMenu
