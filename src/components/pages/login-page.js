import React, {Component} from 'react';
// import { Redirect } from 'react-router-dom';
import SwapiService from '../../services/swapi-service'

export default class LoginPage extends Component {
    swapiService = new SwapiService();

    state = {};

    constructor() {
        super();
        // this.updatePlanet();
    }


    // onPlanetLoaded = (planet) => {
    //     this.setState({ planet });
    // };

    updatePlanet() {
        const id = 12;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {
        return (
            <div className="jumbotron">
                <p>Login to see secret page!</p>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Login</label>
                    <input id="login" className="form-control" placeholder="Введите логин"></input>
                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                    <input id="password" className="form-control" placeholder="Введите пароль" type="password"></input>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary"
                        // onClick={onLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        );
    }
}

