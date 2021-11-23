import React from 'react'


import {BiUserCircle} from 'react-icons/bi'
import MainAppForm from './MainAppForm'
import { LogoContainer } from '../Navbar/Logo'
import { TopBar } from '../Navbar/TopBar'

const AppForm = () => {
    return (
        <div>
        <TopBar>
                <LogoContainer>Recruitr</LogoContainer>
                <BiUserCircle class="usericon" color="white" size={35}/>
        </TopBar>
        <MainAppForm />
        </div>
    )
}

export default AppForm
