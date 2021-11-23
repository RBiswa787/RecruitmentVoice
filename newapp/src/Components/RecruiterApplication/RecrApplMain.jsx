import React from 'react'
import { TopBar } from '../Navbar/TopBar'
import { LogoContainer } from '../Navbar/Logo'
import {BiUserCircle} from 'react-icons/bi'
import RecrDetails from './RecrDetails'
import SearchMain from './SearchMain'

const RecrApplMain = () => {
    return (
        <div>
            <TopBar>
                <LogoContainer>Recruitr</LogoContainer>
                <BiUserCircle class="usericon" color="white" size={35}/>
            </TopBar>
            <RecrDetails />
            <SearchMain />
        </div>
    )
}

export default RecrApplMain
