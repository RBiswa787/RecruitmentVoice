import React from 'react'
import { ContactFormStyling } from './ContactFormStyling'

export default function ContactForm() {
    return (
            <ContactFormStyling>
            <div className = "left" >
                <h1>Get in Touch</h1>
                <input type = "text" placeholder ="Name" class ="name" /> 
                <input type = "email" placeholder ="Email" class ="email" /> <br />
                <br /><textarea type = "text" placeholder ="Subject" class ="subject"  /> <br />
                <br /><textarea class ="message" placeholder ="Message"/><br />
                <br /><input type = "submit" class ="submit" value="Submit" />
            </div>
            </ContactFormStyling>
    );
};


