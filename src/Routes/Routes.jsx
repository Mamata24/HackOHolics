import React from 'react';
import Login1 from '../Components/Login1'
import Dashboard from '../Components/Dashboard';
import Maintenance from '../Components/Maintenance';
import { Switch, Route, Link } from 'react-router-dom';

function Routes() {
    return (
        <Switch>
            <Route
                exact
                path="/"
                render={(props) => <Login1 {...props} />}
            />
            <Route exact path="/Dashboard" render={() => <Dashboard />} />
            <Route exact path="/Maintenance" render={() => <Maintenance />} />
            <Route render={() => <h1>Error 404: Page not found</h1>} />
        </Switch>
    );
}

export default Routes;
