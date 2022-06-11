import React, {Component} from 'react';

import LoginPage from "../pages/login-page";
import AdminClientEdit from "../admin-client-edit/admin-client-edit";
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
import AdminClient from "../admin-client/admin-client";


export default class App extends Component {


    state = {
        isLoggedIn: true,
        // isLoggedIn: localStorage.getItem('token') ? true : false,
        //client
        //jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6MiwidHlwZSI6ImNsaWVudCIsImlhdCI6MTY1MjEzMTg0NCwiZXhwIjo3MzY1MjEzMTg0NH0.VUWRqrU4iS8MSclPhpX8ahzF8ym1BXqT2JJaVkyizyc',
        //admin token
        jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6NiwidHlwZSI6ImFkbWluIiwiaWF0IjoxNjUzMjA1MDkxLCJleHAiOjczNjUzMjA1MDkxfQ.sk2F_iFIa8M8yTtwtD7oB0t5sylg0CA0c3GKuj0Rfms',
        //swapiService: new SwapiService()
        swapiService: new DummySwapiService()
    };

    onLogin = (payload) => {
        let promise = this.state.swapiService.login(payload);
        return promise.then((data) => {
            localStorage.setItem('token', data.access_token);
            this.setState({
                isLoggedIn: true,
                jwtToken: data.access_token
            });
        })
    };

    onLogout = () => {
        localStorage.removeItem('token')
            this.setState({
                isLoggedIn: false,
                jwtToken: false
        })
    };

    render() {
        const {isLoggedIn, jwtToken, swapiService} = this.state;
        const {type} = isLoggedIn ? jwt(jwtToken) : '';
        const accountDetail = type === 'client' ? <AccountDetails jwtTokenToken={jwtToken} isLoggedIn={isLoggedIn} swapiService={swapiService}/> : ''
        const menu = isLoggedIn ? <Menu jwtToken={jwtToken} onLogout={this.onLogout}/> : ''
        return (
            <SwapiServiceProvider value={this.state.swapiService} >
            <ErrorBoundry>
                <Router>
                    <div>
                        {menu}
                        <Switch>
                            <Route path="/"
                                   render={() => (
                                       <div className="row mb2">
                                           <PersonDetails jwtToken={jwtToken} isLoggedIn={isLoggedIn} swapiService={swapiService}/>
                                           {accountDetail}
                                       </div>
                                   )}
                                   exact/>
                            <Route path="/tariff"
                                   render={() => (
                                       <TariffDetails jwtToken={jwtToken} isLoggedIn={isLoggedIn} swapiService={swapiService}/>
                                   )}
                                   exact/>
                            <Route path="/admin/tariff"
                                   render={() => (
                                       <TariffEdit jwtToken={jwtToken} isLoggedIn={isLoggedIn} swapiService={swapiService}/>
                                   )}
                                   exact/>
                            <Route path="/register"
                                   render={() => (
                                       <RegisterPage jwtToken={jwtToken} isLoggedIn={isLoggedIn} swapiService={swapiService}/>
                                   )}
                                   exact/>
                            <Route path="/account"
                                   render={() => (
                                       <AccountDetails jwtToken={jwtToken} isLoggedIn={isLoggedIn} swapiService={swapiService}/>
                                   )}
                                   exact/>
                            <Route path="/payments"
                                   render={() => (
                                       <PaymentDetails jwtToken={jwtToken} isLoggedIn={isLoggedIn} swapiService={swapiService}/>
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
                                    <ClientDetails jwtToken={jwtToken} isLoggedIn={isLoggedIn} swapiService={swapiService}/>
                                )}/>
                            <Route
                                path="/logout"
                                render={() => (
                                    <ClientDetails jwtToken={jwtToken} isLoggedIn={isLoggedIn} swapiService={swapiService}/>
                                )}/>
                            <Route
                                path="/admin/client"
                                render={() => (
                                    <AdminClient jwtToken={jwtToken} isLoggedIn={isLoggedIn} swapiService={swapiService}/>
                                )}exact/>
                            <Route
                                path="/admin/client/edit"
                                render={() => (
                                    <AdminClientEdit jwtToken={jwtToken} isLoggedIn={isLoggedIn} swapiService={swapiService}/>
                                )}/>
                        </Switch>
                    </div>
                </Router>
            </ErrorBoundry>
            </SwapiServiceProvider>
        );
    }
}

