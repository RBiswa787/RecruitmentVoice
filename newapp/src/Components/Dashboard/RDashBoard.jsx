import React from "react";
import { RDashBoardStyle } from "./RDashBoardStyle";
import { useHistory } from "react-router-dom";
import user from './user.png'
function RDashboard() {
    const history = useHistory();
    const handleClickPostNew =  () => {history.push('/new_job')};
    var name = "Name";
    var jobposted = 7;
    var appsubmit = 54;
    var jobviews = 101;
    var intsche = 11;
    var username = "Jack Doe";
    var jobid = "41321";
    var time = "11:30 am";
    var date = 9;
    var day = "Thu";
    var schedname = "Jack Doe";
    var job = "Script Writer";
  
    return (
      <div>
          <RDashBoardStyle>
        <div className="welcome-heading">
          <h2 className="heading">Welcome {name} !</h2>
        </div>
        <br />
        {/* All the activity showing buttons */}
        <div className="Activity-box">
          <div className="job-posted">
            {jobposted}
            <p>Total Job Posted</p>
          </div>
          <div className="App-submit">
            {appsubmit}
            <p>Application submitted</p>
          </div>
          <div className="jobviews">
            {jobviews}
            <p>Total Job Views</p>
          </div>
          <div className="intsche">
            {intsche}
            <p>Total Interview Scheduled</p>
          </div>
        </div>
        <br />
        {/* All the activity showing buttons closed*/}
        {/* Applictaion Box */}
        <div className="new-applications">
          <h4>New Applications</h4>
          <hr />
          <span>
            {username}
            <br />
            Applied for Jobid : {jobid}
          </span>
          <br />
        </div>
        <div className="scheduled-interviews">
          <h4>Scheduled Interviews</h4>
          <hr />
          <div className="name-time-box">
            <span>
              {schedname}
              <br />
              {time}
            </span>
          </div>
          <div className="date-box">
            <span>
              {date} <br />
              {day}
            </span>
          </div>
        </div>
        <div className="active-box">
          <h4>Active Jobs</h4>
          <hr />
          <p className="job">{job}</p>
          <p>{jobid}</p>
          <br />
        </div>
        <button className="btn" onClick={handleClickPostNew}>
          Post New Job
        </button>
        </RDashBoardStyle>
      </div>
    );
  }
  
  export default RDashboard;
  