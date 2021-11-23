import React from 'react'
import { FooterSecStyling } from './FooterSecStyling'
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';



const FooterSecComponent = () => {
    return (
        <FooterSecStyling>
            <div className = "container">
                <div className="contactsection__wrapper">
                    <div className="left">
                    <ContactForm />
                    </div>
                    <div className="right">
                    <ContactInfo />
                    </div>
                </div>
            </div>
            <p className ="Copyright">Copyright 2021 Recruitr. All Rights Reserved</p>
        </FooterSecStyling>
    );
};

export default FooterSecComponent
