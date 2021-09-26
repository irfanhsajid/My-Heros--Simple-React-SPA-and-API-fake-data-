import React from 'react';
import './Scholar.css';
const Scholar = (props) => {
    //console.log(props.scholar);
    const { name, img, budget, country, education } = props.scholar;
    return (
        <div className="col-1 col-md-4 g-4">
            <div className="card h-100 scholar-container ">
                <img src={img} className="scholar-img" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p>From: {country}</p>
                    <p>Education: {education}</p>
                    <p><small>Honorarium: {budget}$</small></p>

                    <button onClick={() => props.handleMeeting(props.scholar)}
                        className="btn-primary rounded-3 px-3 py-1"> <i className="fas fa-handshake"></i> Invite Him</button>
                </div>
            </div>
        </div>

    );
};

export default Scholar;