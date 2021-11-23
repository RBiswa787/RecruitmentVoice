import React, { useState } from "react";
import {JobsFormStyle} from './JobsFormStyle'

function PostJob() {
  const [jobs, setJobs] = useState({
    jobid: "",
    role: "",
    type: "",
    location: "",
    compensation: "",
    jobdesc: ""
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setJobs({ ...jobs, [name]: value });
  }

  function handleClick() {
    alert("Thankyou ! Job Posted");
  }

  //  Form
  return (
    <div className="Appform-container">
        <JobsFormStyle>
      <h1 className="Appform-Desc">Post New Jobs</h1>
      <form>
        <label className="label-desc">Job ID: </label>
        <input
          id="smalltext"
          name="jobid"
          onChange={handleChange}
          className="box"
          type="number"
          defaultValue={jobs.jobid}
          autoComplete="off"
        />
        <br />
        <br />
        <label className="label-desc">Role: </label>
        <input
          id="smalltext"
          name="role"
          onChange={handleChange}
          className="box"
          type="text"
          defaultValue={jobs.role}
          autoComplete="off"
        />
        <br />
        <br />
        <label className="label-desc">Type: </label>
        <input
          id="smalltext"
          name="type"
          className="box"
          type="text"
          defaultValue={jobs.type}
          onChange={handleChange}
          autoComplete="off"
        />
        <br />
        <br />
        <label className="label-desc">Location: </label>
        <input
          id="smalltext"
          name="location"
          onChange={handleChange}
          className="box"
          type="text"
          defaultValue={jobs.location}
          autoComplete="off"
        />
        <br />
        <br />
        <label className="label-desc">Compensation: </label>
        <input
          id="smalltext"
          name="compensation"
          onChange={handleChange}
          className="box"
          type="text"
          defaultValue={jobs.compensation}
          autoComplete="off"
        />
        <br />
        <br />
        <br />
        <label class="desc">
          Detailed Job Description and Requirements:
        </label>
        <br />
        <br />
        <textarea
          class="Desc"
          name="jobdesc"
          onChange={handleChange}
          className="text-area"
          rows="10"
          cols="100"
          defaultValue={jobs.jobdesc}
        ></textarea>

        <button type="submit" className="btn" onClick={handleClick}>
          Post
        </button>
      </form>
      <br />
      </JobsFormStyle>
    </div>
  );
}

export default PostJob;
