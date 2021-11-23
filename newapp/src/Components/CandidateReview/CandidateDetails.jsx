import React from 'react'
import { CandidateDetailsStyle } from './CandidateDetailsStyle'
import User from './User_Picture.png'
import Interview from './Interview'

var cid = '23145';
var candidate_name = 'Thomas Doe';
var email = 'xyz@gmail.com';
var contact ='9292XXXXX';
var desc = "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.”"
var exp ="2.5";
var skills = "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.”"

const CandidateDetails = () => {
    return (
        <div>
            <CandidateDetailsStyle>
            <h2>Candidate ID: {cid}</h2>
            <img src = {User} alt="" style={{
                    position:"absolute",
                    left:"10%",
                    right:"30.56%",
                    top:"25%",
                    bottom:"76.24%",
                    width:"10%",
            }}/>
            <div className="Details">
            <p id="Headings"><b>Name: </b> {candidate_name}</p>
            <p id="Headings"><b>Email : </b> {email}</p>
            <p id="Headings"><b>Contact: </b> {contact}</p>
            <br />
            <p id="desc">{desc}</p>
            <br />
            <p><b>Experience: </b>{exp} yrs</p>
            <p id="exp"><b>Briefly explain you skills and previous relevant experiences:</b></p>
            <br />
            <p id="desc">{skills}</p>
            <br />
            </div>
            </CandidateDetailsStyle>
            <Interview />
        </div>
    )
}

export default CandidateDetails
