import React from 'react'
import { SidebarStyling } from './SidebarStyling';
import SidebarContent from './SidebarContent';

const Sidebar = () => {
  return(
    <div>
      <SidebarStyling>
        <div class="wrapper">
          <div class="sidebar">
            <SidebarContent />
          </div>
        </div>
      </SidebarStyling>
    </div>
  )
}
export default Sidebar;