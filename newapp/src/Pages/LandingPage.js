import React from 'react'
import Navbar_Component from '../Components/Navbar/Navbar_Component'
import styled from 'styled-components'
import FAQSecComponent from '../Components/FAQSection/FAQSectionComponent'
import FooterSecComponent from '../Components/Footer/FooterSectionComponent'

const LandingPage = () => {
    return (
        <LandingPageSection>
            <Navbar_Component/>
            <FAQSecComponent/>
            <FooterSecComponent/>
        </LandingPageSection>  
    )
}

export default LandingPage

const LandingPageSection= styled.div`
display: flex;
height: 100%;
width: 100%;
zIndex: 0;
`
