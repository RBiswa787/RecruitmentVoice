import React from 'react'
import { TopBar } from './TopBar'
import { LogoContainer } from '../CandidateProfile/Logo'
import {BiUserCircle} from 'react-icons/bi'
import SearchMain from './SearchMain'
import Sidebar from './Sidebar'

const ActiveJobsMain = () => {
    return (
        <div>
            <TopBar>
                <LogoContainer>Recruitr</LogoContainer>
                <BiUserCircle class="usericon" color="white" size={35}/>
            </TopBar>
            <Sidebar />
            <SearchMain />
            
        </div>
    )
}

export default ActiveJobsMain
