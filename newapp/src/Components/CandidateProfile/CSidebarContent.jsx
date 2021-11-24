import React from 'react'
import { CSidebarContentStyle } from './CSidebarContentStyle';
import { useHistory } from 'react-router-dom';

const CSidebarContent = () => {
  const history = useHistory();
  const handleClickFindJob = () => history.push('/cand_actv_jobs');
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
              <span class="item" onClick={handleClickFindJob}>Find Jobs</span>
          </a>
        </li>
      </ul>
      </CSidebarContentStyle>
    </div>
    
  )
}

export default CSidebarContent;