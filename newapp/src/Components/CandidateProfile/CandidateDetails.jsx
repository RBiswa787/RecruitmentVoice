import React from 'react'
import { CandidateDetailsStyle } from './CandidateDetailsStyle';

const CandidateDetails = () => {
    var candidate_name = 'Thomas Doe';
    var email = 'xyz@gmail.com';
    var contact ='9292XXXXX';
    var desc = 'Skilled in talent acquisition. Special ability to negotiate terms. Proven professional with extensive interest and experience of 8 years. Skilled at addressing high attrition rates.'
    return (
        <div>
            <CandidateDetailsStyle>
            <div className="head">
            <p id="Headings"><b>Name: </b> {candidate_name}</p>
            <p id="Headings"><b>Email : </b> {email}</p>
            <p id="Headings"><b>Contact: </b> {contact}</p>
            </div>
            <br />
            <p className="desc">{desc}</p>
            </CandidateDetailsStyle>
        </div>
    )
}

export default CandidateDetails;