import React from 'react';
import Login1 from '../Components/Login1';
import Maintenance from '../Components/Maintenance';
import { Switch, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Agreement from '../Components/Agreement';
import Payment from '../Components/Payment';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" render={(props) => <Login1 {...props} />} />
            <Route exact path="/Maintenance" render={() => <Maintenance />} />
            <Route exact path="/Agreement" render={() => <Agreement />} />
            <Route exact path="/Payment" render={() => <Payment />} />
            <Route render={() => <h1>Error 404: Page not found</h1>} />
        </Switch>
    );
}

export default Routes;
