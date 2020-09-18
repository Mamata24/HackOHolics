import React from 'react';
import Navbar from './Navbar';

function Payment() {
    function handleClick() {}

    return (
        <React.Fragment>
            <Navbar currLoc={'payment'} />
            <div style={{ marginTop: '60px', textAlign: 'center' }}>
                <button
                    onClick={handleClick}
                    style={{
                        width: 'max-content',
                        fontWeight: 'bold',
                        padding: '12px 30px',
                    }}
                >
                    Pay Rent
                </button>
            </div>
        </React.Fragment>
    );
}
export default Payment;
