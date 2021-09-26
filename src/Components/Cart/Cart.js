import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { meeting } = props;
    let total = 0;
    let name = '';
    for (const scholar of meeting) {
        total = total + scholar.budget;
        name = name + ' ' + scholar.name + ',';
    }

    return (
        <div className="position-relative">
            <div className='cart-style rounded-2 mx-2 position-fixed'>
                <h2 className="text-center cart-text">Meeting Info</h2>
                <p className="border-bottom"></p>
                <h5>No. of Scholars Invited: <span className="cart-text"> {props.meeting.length} </span></h5>
                <h6>Scholars Name : <span className="cart-text"> {name}</span></h6>
                <h6>Total invitation Cost : <span className="cart-text">{total}$</span></h6>
            </div>
        </div>
    );
};

export default Cart;