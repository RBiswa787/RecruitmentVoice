import React from 'react'
import { TopBar } from '../Navbar/TopBar'
import { LogoContainer } from '../Navbar/Logo'
import {BiUserCircle} from 'react-icons/bi'
import ApplyDetails from './ApplyDetails'

const ApplyMain = () => {
    return (
        <div>
           <TopBar>
               <LogoContainer>Recruitr</LogoContainer>
               <BiUserCircle class="usericon" color="white" size={35}/>
            </TopBar> 
            <ApplyDetails />
        </div>
    )
}

export default ApplyMain
