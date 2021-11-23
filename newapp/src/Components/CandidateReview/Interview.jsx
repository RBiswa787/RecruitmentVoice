import React from 'react'
import InterviewForm from './InterviewForm'
import { InterviewStyle } from './InterviewStyle'

const Interview = () => {
    return (
        <div>
            <InterviewStyle>
               <h2>Schedule Interviews</h2> 
               <div className="Interview">
                  <InterviewForm />
               </div>
            </InterviewStyle>
        </div>
    )
}

export default Interview
