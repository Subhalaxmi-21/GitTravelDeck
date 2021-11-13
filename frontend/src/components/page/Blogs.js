import React, { useContext } from 'react'
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Setting from '../pages/settings/Setting';
import Single from '../pages/single/Single';
import Write from '../pages/write/Write';
import Topbar from '../Topbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from '../pages/Homepage/Homepage';
import { Context } from '../../context/Context';

function Blogs() {
    const { user } = useContext(Context)
    return (
        <Router>
            <Topbar />
            <Switch>
                <Route exact path="/blogs">
                    <Homepage />
                </Route>
                <Route path="/register">
          {user ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">
          {user ? <Setting /> : <Register />}
        </Route>
            </Switch>
        </Router>
    )
}

export default Blogs;