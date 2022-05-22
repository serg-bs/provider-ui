import React, {Component} from 'react';

import LoginPage from "../pages/login-page";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ErrorBoundry from "../error-boundry";
import {SwapiServiceProvider} from '../swapi-service-context';
import TariffDetails from "../tariff-details";
import PaymentDetails from "../payment-details";
import AccountDetails from "../account-details";
import RegisterPage from "../pages/register-page";
import PersonDetails from "../person-details";
import Menu from "../menu/menu";
import DummySwapiService from "../../services/dummy-swapi-service";
import ClientDetails from "../client/client-details";
import SwapiService from "../../services/swapi-service";
import TariffEdit from "../admin-tariff";
import jwt from "jwt-decode";


export default class App extends Component {


    state = {
        isLoggedIn: false,
        //client
         jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6MiwidHlwZSI6ImNsaWVudCIsImlhdCI6MTY1MjEzMTg0NCwiZXhwIjo3MzY1MjEzMTg0NH0.VUWRqrU4iS8MSclPhpX8ahzF8ym1BXqT2JJaVkyizyc',
        //admin token
        //jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6NiwidHlwZSI6ImFkbWluIiwiaWF0IjoxNjUzMjA1MDkxLCJleHAiOjczNjUzMjA1MDkxfQ.sk2F_iFIa8M8yTtwtD7oB0t5sylg0CA0c3GKuj0Rfms',
        swapiService: new SwapiService()
        //swapiService: new DummySwapiService()
    };

    onLogin = (payload) => {
        let promise = this.state.swapiService.login(payload);
        return promise.then((data) => {
            this.setState({
                isLoggedIn: true,
                jwtToken: data.access_token
            });
        })
    };

    render() {
        const {isLoggedIn, jwtToken, swapiService} = this.state;
        const {type} = jwt(jwtToken);
        const accountDetail = type === 'client' ? <AccountDetails jwtTokenToken={jwtToken} swapiService={swapiService}/> : ''
        return (
            <SwapiServiceProvider value={this.state.swapiService} >
            <ErrorBoundry>
                <Router>
                    <div>
                        <Menu jwtToken={jwtToken}/>
                        <Switch>
                            <Route path="/"
                                   render={() => (
                                       <div className="row mb2">
                                           <PersonDetails jwtToken={jwtToken} swapiService={swapiService}/>
                                           {accountDetail}
                                       </div>
                                   )}
                                   exact/>
                            <Route path="/tariff"
                                   render={() => (
                                       <TariffDetails jwtToken={jwtToken} swapiService={swapiService}/>
                                   )}
                                   exact/>
                            <Route path="/admin/tariff"
                                   render={() => (
                                       <TariffEdit jwtToken={jwtToken} swapiService={swapiService}/>
                                   )}
                                   exact/>
                            <Route path="/register"
                                   render={() => (
                                       <RegisterPage jwtToken={jwtToken} swapiService={swapiService}/>
                                   )}
                                   exact/>
                            <Route path="/account"
                                   render={() => (
                                       <AccountDetails jwtToken={jwtToken} swapiService={swapiService}/>
                                   )}
                                   exact/>
                            <Route path="/payments"
                                   render={() => (
                                       <PaymentDetails jwtToken={jwtToken} swapiService={swapiService}/>
                                   )}
                                   exact/>
                            <Route
                                path="/login"
                                render={() => (
                                    <LoginPage isLoggedIn={isLoggedIn}
                                               onLogin={this.onLogin}
                                               swapiService={swapiService}/>
                                )}/>
                            <Route
                                path="/client"
                                render={() => (
                                    <ClientDetails jwtToken={jwtToken} swapiService={swapiService}/>
                                )}/>
                        </Switch>
                    </div>
                </Router>
            </ErrorBoundry>
            </SwapiServiceProvider>
        );
    }
}

