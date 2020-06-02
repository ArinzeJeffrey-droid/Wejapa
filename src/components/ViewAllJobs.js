import React, {useState} from 'react';
import Jobs from './Jobs';


const ViewAllJobs = () => {
    const profile = () => {
        window.location.href = "/"
    }
    return (
        <div>
        <div className="job-header">
            <h1 className="latest-job">Latest Jobs</h1>
            <button onClick={profile} className="btn btn-primary profile-btn">View Profile</button>
        </div>
            <Jobs/>
            <Jobs/>
            <Jobs/>
        </div>
    );
}

export default ViewAllJobs;