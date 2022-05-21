import React, {Component} from 'react';

import './person-details.css';
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import ErrorAuth from "../error-auth";
import Menu from "../menu/menu";
import MainPage from "../main-page/main-page";

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
        const {jwtToken, swapiService} = this.props;
        swapiService.getClient(jwtToken)
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
            <MainPage {...data}/>
         )
    }
}
