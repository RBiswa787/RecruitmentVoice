import React, { useState } from "react";
import {MainAppFormStyle} from './MainAppFormStyle'

function MainAppForm() {
  const [app, setapp] = useState({
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
    setapp({ ...app, [name]: value });
  }

  function handleClick() {
    alert("Thankyou ! Job Posted");
  }

  //  Form
  return (
    <div className="Appform-container">
        <MainAppFormStyle>
      <h1 className="Appform-Desc">Application Form</h1>
      <form>
        <label className="label-desc">Name: </label>
        <input
          id="smalltext"
          name="name"
          onChange={handleChange}
          className="box"
          type="text"
          defaultValue={app.role}
          autoComplete="off"
        />
        <br />
        <br />
        <label className="label-desc">Email: </label>
        <input
          id="smalltext"
          name="email"
          className="box"
          type="text"
          defaultValue={app.type}
          onChange={handleChange}
          autoComplete="off"
        />
        <br />
        <br />
        <label className="label-desc">Contact: </label>
        <input
          id="smalltext"
          name="contact"
          onChange={handleChange}
          className="box"
          type="text"
          defaultValue={app.location}
          autoComplete="off"
        />
        <br />
        <br />
        <label className="label-desc">Experience [in yrs]: </label>
        <input
          id="smalltext"
          name="experience"
          onChange={handleChange}
          className="box"
          type="text"
          defaultValue={app.compensation}
          autoComplete="off"
        />
        <br />
        <br />
        <br />
        <label class="desc">
        Briefly explain you skills and previous relevant experiences:
        </label>
        <br />
        <br />
        <textarea
          class="Desc"
          name="description"
          onChange={handleChange}
          className="text-area"
          rows="10"
          cols="100"
          defaultValue={app.jobdesc}
        >
        </textarea>

        <button type="submit" className="btn" onClick={handleClick}>
          Submit
        </button>
      </form>
      <br />
      </MainAppFormStyle>
    </div>
  );
}

export default MainAppForm;