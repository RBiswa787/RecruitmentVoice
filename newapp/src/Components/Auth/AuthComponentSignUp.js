import React from 'react'
import { AuthComponentStyling } from './AuthComponentStyling'
import { LogoContainer } from './Logo'
import SignUp from './SignUp'
import { SignUpStyling } from './SignUpStyling'



const AuthComponentSignUp = () => {
    return (
        <AuthComponentStyling>
            <LogoContainer>Recruitr</LogoContainer>
            <SignUp>
                <SignUpStyling/>
            </SignUp>
            
        </AuthComponentStyling>
    )
}

export default AuthComponentSignUp
