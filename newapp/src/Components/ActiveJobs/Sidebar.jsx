import React from 'react'
import { SidebarStyle } from './SidebarStyle'
import SidebarContent from './SidebarContent'

const Sidebar = () => {
    return (
        
            <SidebarStyle>
                <div class="wrapper">
                    <div class="sidebar">
                    <SidebarContent />
                    </div>
                </div>
            </SidebarStyle>
        
    )
}

export default Sidebar
