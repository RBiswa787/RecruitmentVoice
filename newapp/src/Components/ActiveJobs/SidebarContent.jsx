import React from 'react'
import { SidebarContentStyle } from './SidebarContentStyle';
import { useHistory } from 'react-router-dom';
const SidebarContent = () => {

  const history = useHistory();
  const backRecrProf = () => history.push('/recr_prof');
  const toDashboard = () => history.push('/dashboard'); 

  return (
    <div>
      <SidebarContentStyle>
      <ul>
        <li>
          <a href="#"  >
              <span class="item" onClick={toDashboard}>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="item" onClick = {backRecrProf}>My Profile</span>
          </a>
        </li>
                
        <li>
          <a href="#" class="active" >
              <span class="item">Active Jobs</span>
          </a>
        </li>
      </ul>
      </SidebarContentStyle>
    </div>
    
  )
}

export default SidebarContent;