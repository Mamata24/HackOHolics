import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
function Navbar() {
    const history = useHistory()
    const handleLogout = (e) => {
        history.push('/')
    }
    return (
        <div
            style={{
                height: '50px',
                background: '#4867aa',
                padding: '10px 40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: 'Roboto',
            }}
        >
            <h1 style={{ color: 'white' }}>Heritage Houses</h1>
            <div style={{ fontSize: 'larger' }}>
                <Link
                    style={{
                        margin: '0 40px',
                        textDecoration: 'none',
                        color: 'white',
                    }}
                    to="/PayRent"
                >
                    Pay Rent
                </Link>
                <Link
                    style={{ textDecoration: 'none', color: 'white' }}
                    to="/Maintenance"
                >
                    Request Maintenance
                </Link>
                <Link
                    style={{
                        margin: '0 40px',
                        textDecoration: 'none',
                        color: 'white',
                    }}
                    to="/RentalAgt"
                >
                    View/Renew Agreement
                </Link>
            </div>
            <button onClick={handleLogout}
                style={{
                    border: '1px solid black',
                    background: 'white',
                    borderRadius: '4px',
                    width: 'max-content'
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default Navbar;
