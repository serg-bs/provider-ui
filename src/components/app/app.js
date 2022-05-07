import React, {Component} from 'react';

import './app.css';
import LoginPage from "../pages/login-page";
import SwapiService from '../../services/swapi-service'

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        isLoggedIn: false,
        jwt: ''
    };

    onLogin = (payload) => {
        console.log(payload);
        let promise = this.swapiService.login(payload);
        promise.then((data) => {
            console.log(data);
            this.setState({
                isLoggedIn: true,
                jwt: data.jwt
            });
        })
    };

    render() {
        const {isLoggedIn} = this.state;
        return (


            <div>
                <LoginPage isLoggedIn={this.state.isLoggedIn}
                           onLogin={this.onLogin}/>
            </div>
        );
    }
}

