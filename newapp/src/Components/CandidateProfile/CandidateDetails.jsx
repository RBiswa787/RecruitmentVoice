import React from 'react'
import { CandidateDetailsStyle } from './CandidateDetailsStyle';

const CandidateDetails = () => {
    var candidate_name = 'Thomas Doe';
    var email = 'xyz@gmail.com';
    var contact ='9292XXXXX';
    var descline1 = '“Lorem Ipsum is simply dummy text of the printing and typesetting';
    var descline2 = "industry. Lorem Ipsum has been the industry's standard dummy text";
    var descline3 = "ever since the 1500s, when an unknown printer took a galley of type and ";
    var descline4 = "scrambled it to make a type specimen book. It has survived not only five";
    var descline5 = "centuries, but also the leap into electronic typesetting, remaining";
    var descline6 = 'essentially unchanged.”';
    return (
        <div>
            <CandidateDetailsStyle>
            <p id="Headings"><b>Name: </b> {candidate_name}</p>
            <p id="Headings"><b>Email : </b> {email}</p>
            <p id="Headings"><b>Contact: </b> {contact}</p>
            <p>{descline1}</p>
            <p>{descline2}</p>
            <p>{descline3}</p>
            <p>{descline4}</p>
            <p>{descline5}</p>
            <p>{descline6}</p>
            </CandidateDetailsStyle>
        </div>
    )
}

export default CandidateDetails;