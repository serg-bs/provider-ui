import React, {Component} from 'react';

import './person-details.css';
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import ErrorAuth from "../error-auth";
import MainPage from "../main-page/main-page";
import Tariffs from "../tarrifs/tariffs";

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
        const errorMessage = hasError ? <ErrorIndicator/> : null;
        const spinner = !data ? <Spinner /> : null;
        const content = data ? <MainPage {...data}/> : null;

        return (
            <div className="person-details item-details card card-position col-md-6">
                {errorMessage}
                {spinner}
                {content}
            </div>
         )
    }
}
