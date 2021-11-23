import React from 'react'
import { TopBar } from '../PostJobs/TopBar'
import { LogoContainer } from '../PostJobs/Logo'
import {BiUserCircle} from 'react-icons/bi'
import CandidateDetails from './CandidateDetails'


const ReviewMain = () => {
    return (
        <div>
            <TopBar>
                <LogoContainer>Recruitr</LogoContainer>
                <BiUserCircle class="usericon" color="white" size={35}/>
            </TopBar>
            <CandidateDetails />
            
        </div>
    )
}

export default ReviewMain
