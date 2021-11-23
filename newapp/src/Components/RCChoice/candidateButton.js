import React from 'react'
import { CBStyling } from './cbStyling'
import { useHistory } from 'react-router-dom';

const CandidateButton = () => {
    const history = useHistory();
    const onSubmit = () => history.push('/cand_prof');
    return (
        <div>
            <CBStyling>
            <button onClick = {onSubmit}>Candidate</button>
            </CBStyling>
        </div>
    )
}

export default CandidateButton