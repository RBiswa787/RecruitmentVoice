import React, { useState } from 'react';
import { DecisionStyle } from './DecisionStyle';
      
export default function App() {
    const [decision, setdecision] = useState("review");
    const submitButton = () => {
      alert("Updated");
    };
    return (
      <div>
          <DecisionStyle>
        <div className="radio-btn-container">
          <div
            className="radio-btn"
            onClick={() => {
              setdecision("review");
            }}
          >
            <h3>Decision</h3>
            <input
              id="label"
              type="radio"
              value={decision}
              name="decision"
              checked={decision == "review"}
            />
            Under Review
          </div>
          <br />
          <br />
          <div
            className="radio-btn"
            onClick={() => {
              setdecision("accept");
            }}
          >
            <input
              type="radio"
              id="label"
              value={decision}
              name="decision"
              checked={decision == "accept"}
            />
            Accept
          </div>
          <br />
          <br />
          <div
            className="radio-btn"
            onClick={() => {
              setdecision("Reject");
            }}
          >
            <input
              id="label"
              type="radio"
              value={decision}
              name="decision"
              checked={decision == "Reject"}
            />
            Reject
          </div>
        </div>
        <br />
        <br />
        <button onClick={submitButton}>Update</button>
        <br />
        <br />
        </DecisionStyle>
      </div>
    );
  }
  