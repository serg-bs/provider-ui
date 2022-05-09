import React, {Component} from 'react';

import './app.css';
import LoginPage from "../pages/login-page";
import SwapiService from '../../services/swapi-service'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PersonDetails from "../person-details";
import ErrorBoundry from "../error-boundry";
import RegisterPage from "../pages/register-page";
import { SwapiServiceProvider } from '../swapi-service-context';
import DummySwapiService from "../../services/dummy-swapi-service";

export default class App extends Component {


    state = {
        isLoggedIn: false,
        jwt: '',
        // swapiService: new SwapiService()
        swapiService: new DummySwapiService()
    };

    onLogin = (payload) => {
        let promise = this.state.swapiService.login(payload);
        return promise.then((data) => {
            this.setState({
                isLoggedIn: true,
                jwt: data.access_token
            });
        })
    };

    render() {
        const {isLoggedIn, jwt, swapiService} = this.state;
        console.log(swapiService)
        console.log(jwt)
        return (
            <SwapiServiceProvider value={this.state.swapiService} >
            <ErrorBoundry>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/"
                                   render={() => (
                                       <PersonDetails jwt={jwt} swapiService={swapiService}/>
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
                                               onLogin={this.onLogin}
                                               swapiService={swapiService}/>
                                )}/>
                        </Switch>
                    </div>
                </Router>
            </ErrorBoundry>
            </SwapiServiceProvider>
        );
    }
}

