import React from 'react';
import Dashboard from '../Dashboard';
import Maintenance from '../Maintenance';
import { Switch, Route, Link } from 'react-router-dom';

function Routes() {
    return (
        <Switch>
            <Route
                exact
                path="/"
                render={() => <Link to="/Dashboard">Dashboard</Link>}
            />
            <Route exact path="/Dashboard" render={() => <Dashboard />} />
            <Route exact path="/Maintenance" render={() => <Maintenance />} />
            <Route render={() => <h1>Error 404: Page not found</h1>} />
        </Switch>
    );
}

export default Routes;
