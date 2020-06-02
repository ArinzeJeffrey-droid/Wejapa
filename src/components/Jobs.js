import React from 'react';
import wejapa from "../wejapa.jpg"



const Jobs = () => {
    return (
        <div className="jobs">
            <div className="job-icon">
                <img src={wejapa} className="img-responsive" alt=""/>
            </div>
            <div className="job-title">
                <h1>Flutter Developer</h1>
                <p>Remote (USA) - <span>open</span> </p>
                <p className="pay">$650</p>
            </div>
        </div>
    );
}

export default Jobs;