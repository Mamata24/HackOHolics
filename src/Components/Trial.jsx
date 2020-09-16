import React from 'react'

const Trial = ({ handleLogout }) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome Guys!</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Trial
