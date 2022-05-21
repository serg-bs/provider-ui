import React, {Component} from 'react';

import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import ErrorAuth from "../error-auth";
import Client from "./client";
import Validation from "../validation";

export default class ClientDetails extends Component {

    state = {
        data: null,
        hasError: false,
        isLoggedIn: true,
        validation: ''
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

    getClient = () => {
        const {jwtToken, swapiService} = this.props;
        swapiService.getClient(jwtToken)
            .then((data) => {
                this.setState({
                    data,
                    error: false
                });
            }).catch(this.onError);
    }

    componentDidMount() {
        this.getClient();
    }

    showValidationError = (data) => {
        data.then(
            (data) => {
                this.setState({
                    validation : data.message
                })
            }
        )
    }

    updateClient = (payload) => {
        const {jwtToken, swapiService} = this.props;
        swapiService.updateClient(payload, jwtToken)
            .then((res) => {
                this.setState({
                    validation : ''
                })
                if (!res.ok) {
                    return this.showValidationError(res.json())
                }
                console.log(res)
                this.setState({
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
        const validationError = this.state.validation !== '' ? <Validation message={this.state.validation}/> : ''
        return (
            <div>
                {validationError}
            <Client {...data} updateClient={this.updateClient}/>
            </div>
        )
    }
}
