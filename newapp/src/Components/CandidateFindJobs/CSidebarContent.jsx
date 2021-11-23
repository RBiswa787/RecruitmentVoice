import React from 'react'
import { CSidebarContentStyle } from './CSidebarContentStyle';
import { useHistory } from 'react-router-dom';

const CSidebarContent = () => {
  const history = useHistory();
  const handleClickProfile = () => history.push('/cand_prof');
  return (
    <div>
      <CSidebarContentStyle>
      <ul>
        <li>
          <a href="#" onClick={handleClickProfile}>
            <span class="item">My Profile</span>
          </a>
        </li>
                
        <li>
          <a href="#" class="active" >
              <span class="item">Find Jobs</span>
          </a>
        </li>
      </ul>
      </CSidebarContentStyle>
    </div>
    
  )
}

export default CSidebarContent;