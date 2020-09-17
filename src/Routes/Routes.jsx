import React from 'react';
import Dashboard from '../Components/Dashboard';
import Maintenance from '../Components/Maintenance';
import { Switch, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

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
