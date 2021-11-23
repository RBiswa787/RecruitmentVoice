import React from 'react'
import { NavbarContainer } from './Navbar_Styling'
import { OverlayContainer } from './Overlay_Styling';
import {TextHeaderContainer} from './TextHeader_Styling';
import { TextHeaderContainer2 } from './TextHeader_Styling_2';
import { SubtextContainer } from './Subtext_Styling';
import back from './emp_back.jpg';
import VoiceMain from './VoiceMain';
import TopBarMain from './TopBarMain';


const Navbar_Component = () => {  
    return (
            <NavbarContainer>
                <img src = {back} alt="" style={{
                    width:"99vw",
                }}/>
                <OverlayContainer>
                    <TextHeaderContainer>Find the right person</TextHeaderContainer>
                    <TextHeaderContainer2>for every job.</TextHeaderContainer2>
                    <SubtextContainer>Discover. Engage. Hire.</SubtextContainer>
                </OverlayContainer>
                <TopBarMain/>
                <VoiceMain/>
            </NavbarContainer>
    )
}

export default Navbar_Component

