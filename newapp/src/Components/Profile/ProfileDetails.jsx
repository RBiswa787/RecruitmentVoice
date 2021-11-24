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
                <div className="head">
            <p id="Headings"><b>Name: </b> {recruit_name}</p>
            <p id="Headings"><b>Organization :  </b> {organization}</p>
            <p id="Headings"><b>Email : </b> {email}</p>
            <p id="Headings"><b>Contact: </b> {contact}</p>
            </div>
            <p className="desc">Delivered recruitment solutions for hundreds of vacancies across all organizational levels and an array of job functions for companies including XYZ, DEF, GHI, JKL and MNO Company.</p>
            
            </ProfileDetailsStyle>
        </div>
    )
}

export default ProfileDetails;