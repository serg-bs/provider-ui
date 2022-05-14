import React, {Component} from 'react';

import './app.css';
import LoginPage from "../pages/login-page";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ErrorBoundry from "../error-boundry";
import {SwapiServiceProvider} from '../swapi-service-context';
import DummySwapiService from "../../services/dummy-swapi-service";
import TariffDetails from "../tariff-details";
import PaymentDetails from "../payment-details";
import AccountDetails from "../account-details";
import RegisterPage from "../pages/register-page";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {


    state = {
        isLoggedIn: false,
        jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6MiwidHlwZSI6ImNsaWVudCIsImlhdCI6MTY1MjEzMTg0NCwiZXhwIjo3MzY1MjEzMTg0NH0.VUWRqrU4iS8MSclPhpX8ahzF8ym1BXqT2JJaVkyizyc',
        swapiService: new SwapiService()
         // swapiService: new DummySwapiService()
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
                                       <PersonDetails jwtToken={jwt} swapiService={swapiService}/>
                                   )}
                                   exact/>
                            <Route path="/tariff"
                                   render={() => (
                                       <TariffDetails jwtToken={jwt} swapiService={swapiService}/>
                                   )}
                                   exact/>
                            <Route path="/register"
                                   render={() => (
                                       <RegisterPage/>
                                   )}
                                   exact/>
                            <Route path="/account"
                                   render={() => (
                                       <AccountDetails jwtToken={jwt} swapiService={swapiService}/>
                                   )}
                                   exact/>
                            <Route path="/payments"
                                   render={() => (
                                       <PaymentDetails jwtToken={jwt} swapiService={swapiService}/>
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

