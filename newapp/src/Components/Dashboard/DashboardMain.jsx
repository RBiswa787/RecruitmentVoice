import React from 'react'
import { TopBar } from '../Navbar/TopBar'
import { LogoContainer } from '../Navbar/Logo'
import {BiUserCircle} from 'react-icons/bi'
import Sidebar from './Sidebar'
import RDashboard from './RDashBoard'

const DashboardMain = () => {
    return (
        <div>
            <TopBar>
                <LogoContainer>Recruitr</LogoContainer>
                <BiUserCircle class="usericon" color="white" size={35}/>
            </TopBar>
            <Sidebar />
            <RDashboard />
        </div>
    )
}

export default DashboardMain
