import React from 'react'
import { TopBarStyle } from './TopBarStyle'
import { LogoContainer } from './Logo'
import CSidebar from './CSidebar'
import User from './User_Picture.png'
import CandidateDetails from './CandidateDetails'
import UpdateProfile from './UpdateProfile'

const ProfilePageCand = () => {
    return (
        <div>
           <TopBarStyle>
               <LogoContainer>Recruitr</LogoContainer>
           </TopBarStyle>
           <CSidebar />
           <img src = {User} alt="" style={{
                    position:"absolute",
                    left:"48%",
                    right:"30.56%",
                    top:"17%",
                    bottom:"76.24%",
                    width:"10%",
            }}/>
            <CandidateDetails />
            <UpdateProfile />
        </div>
    )
}

export default ProfilePageCand
