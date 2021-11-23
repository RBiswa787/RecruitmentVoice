import React from 'react'
import { CSidebarContentStyle } from './CSidebarContentStyle';

const CSidebarContent = () => {
  return (
    <div>
      <CSidebarContentStyle>
      <ul>
        <li>
          <a href="#"  class="active" >
            <span class="item">My Profile</span>
          </a>
        </li>
                
        <li>
          <a href="#">
              <span class="item">Find Jobs</span>
          </a>
        </li>
      </ul>
      </CSidebarContentStyle>
    </div>
    
  )
}

export default CSidebarContent;