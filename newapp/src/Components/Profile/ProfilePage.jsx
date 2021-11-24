import React from 'react'
import { LogoContainer } from './Logo'
import { ProfileTopBarStyling } from './ProfileTopBarStyle'
import Sidebar from './Sidebar'
import {BiUserCircle} from 'react-icons/bi'
import User from './User_Picture.png'
import ProfileDetails from './ProfileDetails'
import UpdateProfile from './UpdateProfile'

const ProfilePage = () => {
    return (
        <div>
            <ProfileTopBarStyling>
                <LogoContainer>Recruitr</LogoContainer>
                <BiUserCircle class="usericon" color="white" size={35} margin-left="100%"
                />
            </ProfileTopBarStyling>
            <Sidebar />
            <img src = {User} alt="" style={{
                    position:"absolute",
                    left:"50%",
                    right:"30.56%",
                    top:"17%",
                    bottom:"76.24%",
                    width:"10%",
            }}/>
            <ProfileDetails />
            <UpdateProfile />
        </div>
    )
}

export default ProfilePage
