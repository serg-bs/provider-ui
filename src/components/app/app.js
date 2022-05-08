import React, {Component} from 'react';

import './app.css';
import LoginPage from "../pages/login-page";
import SwapiService from '../../services/swapi-service'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PersonDetails from "../person-details";
import ErrorBoundry from "../error-boundry";
import RegisterPage from "../pages/register-page";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        isLoggedIn: false,
        jwt: ''
    };

    onLogin = (payload) => {
        let promise = this.swapiService.login(payload);
        return promise.then((data) => {
            this.setState({
                isLoggedIn: true,
                jwt: data.jwt
            });
        })
    };

    render() {
        const {isLoggedIn} = this.state;
        return (
            <ErrorBoundry>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/"
                                   render={() => (
                                       <PersonDetails/>
                                   )}
                                   exact/>
                            <Route path="/register"
                                   render={() => (
                                       <RegisterPage/>
                                   )}
                                   exact/>
                            <Route
                                path="/login"
                                render={() => (
                                    <LoginPage isLoggedIn={isLoggedIn}
                                               onLogin={this.onLogin}/>
                                )}/>
                        </Switch>

                    </div>
                </Router>
            </ErrorBoundry>
        );
    }
}

