import React from 'react';
import Navbar from './Navbar';

function Agreement() {
    return (
        <React.Fragment>
            <Navbar currLoc="Agreement" />
            <div style={{ padding: '40px' }}>
                <h2 style={{ display: 'inline-block', marginRight: '10px' }}>
                    Important:{' '}
                </h2>
                <span>
                    Your Rental Agreement will expire on{' '}
                    <strong>1st November 2020</strong>. Renew Now!
                </span>
                <div style={{ margin: '30px 0' }}>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                            margin: '0 30px',
                            padding: '8px 20px',
                            textDecoration: 'none',
                            color: 'white',
                            borderRadius: '4px',
                            border: '1px solid black',
                            background: '#7952b3',
                        }}
                        href="https://ft4l0l2l.revvsales.com/perma/DOC/kdZWtoE6U2vj0gl/608---Lease"
                    >
                        View Agreement
                    </a>
                    <a
                        style={{
                            margin: '0 30px',
                            padding: '8px 20px',
                            textDecoration: 'none',
                            color: 'white',
                            borderRadius: '4px',
                            border: '1px solid black',
                            background: 'green',
                        }}
                        href="/"
                    >
                        Renew Agreement
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Agreement;
