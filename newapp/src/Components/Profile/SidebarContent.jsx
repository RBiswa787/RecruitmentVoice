import React from 'react'
import { SidebarContentStyle } from './SidebarContentStyle';
import { useHistory } from 'react-router-dom';

const SidebarContent = () => {
  const history = useHistory();
  const handleClickActJob = () => history.push('/recr_actv_jobs');
  const handleClickDashboard = () => history.push('/dashboard');
  return (
    <div>
      <SidebarContentStyle>
      <ul>
        <li>
          <a href="#">
            <span class="item" onClick = {handleClickDashboard}>Dashboard</span>
          </a>
        </li>
                
        <li>
          <a href="#" class="active" >
              <span class="item">My Profile</span>
          </a>
        </li>
                
        <li>
          <a href="#">
                <span class="item" onClick = {handleClickActJob}>Active Jobs</span>
          </a>
        </li>
      </ul>
      </SidebarContentStyle>
    </div>
    
  )
}

export default SidebarContent;