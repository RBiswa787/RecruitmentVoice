import React from 'react'
import { ContactInfoStyling } from './ContactInfoStyling'
import {ImLocation2} from "react-icons/im"
import {MdOutlinePhoneIphone} from "react-icons/md"
import {AiOutlineMail, AiOutlineClockCircle} from "react-icons/ai"

export default function ContactInfo() {
    return (
        <ContactInfoStyling>
                <ul>
                    <li> <ImLocation2 color ="14AAFF" /> Office Location</li>
                    <p>132 Bertmont Street </p>
                    <p>Boston Mascahheuts 02156 </p>
                    <p>United States </p>
                    <li><MdOutlinePhoneIphone color ="14AAFF" />  Phone Number</li>
                    <p><a  href ="+1 617 572 3012">+1 617 572 3012</a></p>
                    <li><AiOutlineMail color ="14AAFF" />  Email Address</li>
                    <p><a href ="email@sitename.com">email@sitename.com</a></p>
                    <li><AiOutlineClockCircle color ="14AAFF" /> Working Hours</li>
                    <p>9:00 AM to 6:00 PM</p>
                </ul>
        </ContactInfoStyling>
    )
}
