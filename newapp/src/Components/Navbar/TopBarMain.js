import React from 'react'
import { TopBar } from './TopBar'
import { LogoContainer } from './Logo'
import { NavRoutes } from './NavRoutes'
import { NavButton } from './NavButton'
import { SignInButton } from './SignInButton'
import { useHistory } from 'react-router-dom';

const TopBarMain = () => {
    const history = useHistory();
    const handleClick = () => history.push('/authsignup');
    return (
        <TopBar>
                    <LogoContainer>Recruitr</LogoContainer>
                    <NavRoutes>
                        <NavButton>Home</NavButton>
                        <NavButton><a href="#Questions">Support</a></NavButton>
                        <NavButton><a href="#Contact">Contact</a></NavButton>
                    </NavRoutes>
                    <SignInButton type="button" onClick={handleClick}>Sign In</SignInButton>
        </TopBar>
    )
}

export default TopBarMain
