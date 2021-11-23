import React from 'react'
import { SidebarStyle } from './SidebarStyle'
import SidebarContent from './SidebarContent'

const Sidebar = () => {
    return (
        <div>
            <SidebarStyle>
                <div class="wrapper">
                    <div class="sidebar">
                    <SidebarContent />
                    </div>
                </div>
            </SidebarStyle>
        </div>
    )
}

export default Sidebar
