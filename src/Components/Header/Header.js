import React from 'react';
import './Header.css';
import logo from './OnePath_Network.jpg';

const Header = () => {
    return (
        <div className='header-container' >
            <img className='img-fluid onePath-logo mx-auto mt-3' src={logo} alt="" />
            <div className=" w-75  mx-auto p-2">

                <p className='title my-2 text-center '>
                    <span className='fw-bold'>Assalamu Alaikom</span> dear brothers and sisters! You will be glad to know that we are going to arrange a wonderful programme named <span className='text-primary fw-bold fs-4' >'Meet My Scholar'</span>. On that programme we will invite the most renouned Islamic preachers of all over the World. So, if you want to meet your dream Scholar, feel free to Donate and share the khayr!
                    <br />
                    <b>Programme Budget: <span className="text-primary"> 25,000$</span></b> <br />
                    <b><small>Total Reached: 5,000$</small></b>
                </p>

            </div>

        </div>
    );
};

export default Header;