import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Scholar from '../Scholar/Scholar';
import './Scholars.css';

const Scholars = () => {
    const [scholars, setScholars] = useState([]);
    const [meeting, setMeeting] = useState([]);

    const handleMeeting = scholar => {
        const newMeeting = [...meeting, scholar];
        setMeeting(newMeeting);
    }
    useEffect(() => {
        fetch('./scholars.json')
            .then(res => res.json())
            .then(data => setScholars(data));
    }, [])
    return (
        <div className="main-container">
            <div className='scholars-container mx-md-2' >
                <div className="row">
                    {
                        scholars.map(scholar =>
                            <Scholar
                                key={scholar.name}
                                handleMeeting={handleMeeting}
                                scholar={scholar}
                            >
                            </Scholar>)
                    }
                </div>
            </div>

            <div className="budget-container ms-lg-3">
                <Cart meeting={meeting} >

                </Cart>
            </div>
        </div>
    );
};

export default Scholars;