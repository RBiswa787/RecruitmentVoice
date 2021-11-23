import React from 'react'
import { TopBar } from './TopBar'
import { LogoContainer } from './Logo'
import {BiUserCircle} from 'react-icons/bi'
import PostJob from './JobsForm'

const NewJobs = () => {
    return (
        <div>
            <TopBar>
                <LogoContainer>Recruitr</LogoContainer>
                <BiUserCircle class="usericon" color="white" size={35}/>
            </TopBar>

           <PostJob/>
        </div>
    )
}

export default NewJobs
