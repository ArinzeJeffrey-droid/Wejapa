import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from './components/Navbar';
import ViewAllJobs from './components/ViewAllJobs';
import Login from './components/Login';
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <ToastContainer/>
        <Switch>
            <Route path="/jobs/all" component={ViewAllJobs}/>
            <Login/>
        </Switch>
      </div>
    </Router>

  ); 
}

export default App;
