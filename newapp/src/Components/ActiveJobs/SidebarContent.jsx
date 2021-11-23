import React from 'react'
import { SidebarContentStyle } from './SidebarContentStyle';

const SidebarContent = () => {
  return (
    <div>
      <SidebarContentStyle>
      <ul>
        <li>
          <a href="#">
            <span class="item">My Profile</span>
          </a>
        </li>
                
        <li>
          <a href="#" class="active" >
              <span class="item">Find Jobs</span>
          </a>
        </li>
      </ul>
      </SidebarContentStyle>
    </div>
    
  )
}

export default SidebarContent;