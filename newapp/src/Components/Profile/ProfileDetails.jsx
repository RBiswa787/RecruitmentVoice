import React from 'react'
import { ProfileDetailsStyle } from './ProfileDetailsStyle';

const ProfileDetails = () => {
    var recruit_name = 'Mark Brown';
    var organization = 'ABC Studio';
    var email = 'abc@gmail.com';
    var contact ='9999XXXXX';
    return (
        <div>
            <ProfileDetailsStyle>
            <p id="Headings"><b>Name: </b> {recruit_name}</p>
            <p id="Headings"><b>Organization :  </b> {organization}</p>
            <p id="Headings"><b>Email : </b> {email}</p>
            <p id="Headings"><b>Contact: </b> {contact}</p>
            <p>“Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            <p>industry. Lorem Ipsum has been the industry's standard dummy text </p>
            <p>ever since the 1500s, when an unknown printer took a galley of type and </p>
            <p>scrambled it to make a type specimen book. It has survived not only five</p>
            <p>centuries, but also the leap into electronic typesetting, remaining</p>
            <p>essentially unchanged.”</p>
            </ProfileDetailsStyle>
        </div>
    )
}

export default ProfileDetails;