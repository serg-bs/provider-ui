import React, {Component} from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import ErrorAuth from "../error-auth";
import Menu from "../menu/menu";
import MainPage from "../main-page/main-page";
import Tariffs from "../tarrifs/tariffs";
import jwt from 'jwt-decode'

export default class PersonDetails extends Component {

    state = {
        data: null,
        hasError: false,
        isLoggedIn: true
    };

    onError = (error) => {
        if (error && error.message === 'Redirect to login') {
            this.setState({
                isLoggedIn: false
            })
        } else {
            this.setState({
                hasError: true
            })
        }
    };

    componentDidMount() {
        const { jwtToken, swapiService } = this.props;

        // const user = jwt(jwtToken);

        swapiService.getClient(2, jwtToken)
            .then((data) => {
                this.setState({
                    data,
                    error: false
                });
            }).catch(this.onError);
    }


    render() {
        const {hasError, data, isLoggedIn} = this.state;
        if (!isLoggedIn) {
            return <ErrorAuth/>
        }
        if (hasError) {
            return <ErrorIndicator/>
        }
        if (!data) {
            return <Spinner/>;
        }

        return (

            <div>
                <Menu/>
                <MainPage {...data}/>
            </div>
        )
    }
}
