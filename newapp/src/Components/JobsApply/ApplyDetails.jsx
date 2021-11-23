import React from "react";
import {ApplyDetailsStyle} from './ApplyDetailsStyle'

function ApplyDetails() {
  var jobid = 43125;
  var role = "Video Transcriptionist";
  var type = "Part Time";
  var location = "Remote";
  var organisation = "XYZ Creations";
  var compensation = "Negotiable ";
  var description = "Lorem Ipsum";

  function handleClick() {
    alert("This Button has been clicked");
  }
  return (
      <ApplyDetailsStyle>
    <div className="Job-App">
      <h1>Job ID : {jobid}</h1>
      <p><b>Role :</b> {role}</p>
      <p><b>Type : </b> {type}</p>
      <p><b>Location :</b> {location}</p>
      <p><b>Organisation :</b> {organisation}</p>
      <p><b>Compensation : </b> {compensation}</p>
      <p><b>Description :</b></p>
      <p>{description}</p>
      <button type="submit" className="btn" onClick={handleClick}>
        Apply
      </button>
    </div>
    </ApplyDetailsStyle>
  );
}

export default ApplyDetails;
