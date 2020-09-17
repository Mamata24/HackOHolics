import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
function Navbar({ currLoc }) {
    const history = useHistory();
    const handleLogout = (e) => {
        history.push('/');
    };
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
            <Link
                style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: 'x-large',
                    fontWeight: 'bold',
                }}
                to="/Maintenance"
            >
                Heritage Homes
            </Link>
            <div style={{ fontSize: 'larger' }}>
                <Link
                    style={{
                        textDecoration: 'none',
                        color: 'white',
                        backgroundColor:
                            currLoc === 'maintenance'
                                ? '#283593'
                                : 'transparent',
                        padding: '4px 10px',
                        borderRadius: '5px',
                    }}
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
                    to="/PayRent"
                >
                    Pay Rent
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
            <button
                onClick={handleLogout}
                style={{
                    border: '1px solid black',
                    background: 'white',
                    color: 'black',
                    borderRadius: '4px',
                    padding: '8px 15px',
                    width: 'max-content',
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default Navbar;
