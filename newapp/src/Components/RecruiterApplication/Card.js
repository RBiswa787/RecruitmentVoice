import React from "react";
import { CardStyle } from "./CardStyle";

function Card({ person }) {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <CardStyle>
          <div class="ResultBox">
            <span class="jobid dip">Candidate ID: {person.cid}</span>
            <span class="role ">Status: {person.status}</span>
            <span class="Org dip "> Decision: {person.decision} </span>
            <button class="btn dip">Open</button>
          </div>
          <br />
        </CardStyle>
      </div>
    </div>
  );
}

export default Card;