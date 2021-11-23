import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import VoiceSupport from './Components/VoiceSupport/VoiceSupport';
import AuthPageSignUp from './Pages/AuthPageSignUp'
import Choice from './Pages/Choice';
import ProfilePageCand from './Components/CandidateProfile/ProfilePageCand';
import ProfilePage from './Components/Profile/ProfilePage';
import AppForm from './Components/ApplicationForm/AppForm';
import RecrApplMain from './Components/RecruiterApplication/RecrApplMain';
import ApplyMain from './Components/JobsApply/ApplyMain';
import NewJobs from './Components/PostJobs/NewJobs';
import ActiveJobsMain from './Components/ActiveJobs/ActiveJobsMain';


function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route path="/" component={LandingPage} exact/>
      <Route path="/authsignup" component={AuthPageSignUp} exact/>
      <Route path="/choice" component={Choice} exact/>
      <Route path="/cand_prof" component={ProfilePageCand} exact/>
      <Route path="/recr_prof" component={ProfilePage} exact/>
      <Route path="/appl_form" component={AppForm} exact/>
      <Route path="/recr_appl" component={RecrApplMain} exact/>
      <Route path="/new_job" component={NewJobs} exact/>
      <Route path="/recr_actv_jobs" component={ActiveJobsMain} exact/>
    </Switch>
    </Router>
    </>
  );
}

export default App;
