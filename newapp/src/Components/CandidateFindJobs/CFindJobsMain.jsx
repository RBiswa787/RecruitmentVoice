import React from 'react'
import { TopBar } from './TopBar'
import { LogoContainer } from '../CandidateProfile/Logo'
import {BiUserCircle} from 'react-icons/bi'
import SearchMain from './SearchMain'
import CSidebar from './CSidebar'

const CFindJobsMain = () => {
    return (
        <div>
            <TopBar>
                <LogoContainer>Recruitr</LogoContainer>
                <BiUserCircle class="usericon" color="white" size={35}/>
            </TopBar>
            <CSidebar />
            <SearchMain />
            
        </div>
    )
}

export default CFindJobsMain
