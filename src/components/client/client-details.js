import React, {Component} from 'react';

import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import ErrorAuth from "../error-auth";
import Client from "./client";
import Validation from "../validation";
import WindowComplete from "../tarrifs/window-complete";

export default class ClientDetails extends Component {

    state = {
        data: null,
        hasError: false,
        isLoggedIn: this.props.isLoggedIn,
        validation: '',
        completeClient: false
    };
    okCompleteClient = () => {
        this.setState({
            completeClient: false
        })
    }
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
                    hasError: false
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
                    validation: data.message
                })
            }
        )
    }

    updateClient = (payload) => {
        const {jwtToken, swapiService} = this.props;
        swapiService.updateClient(payload, jwtToken)
            .then((res) => {
                this.setState({
                    validation: ''
                })
                if (!res.ok && res.status === 400) {
                    return this.showValidationError(res.json())
                }

                if (!res.ok) {
                    this.setState({
                        hasError: true
                    });
                    return
                }
                this.setState({
                    hasError: false
                });
            }).catch((err) => {

        });
        this.setState({
            completeClient: true
        })
    }

    render() {
        const {completeClient} = this.state;
        const {hasError, data, isLoggedIn} = this.state;
        if (!isLoggedIn) {
            return <ErrorAuth/>
        }
        const Error = completeClient ? <WindowComplete title="Сохраненно" okComplete={this.okCompleteClient}/> : null;
        const errorMessage = hasError ? <ErrorIndicator/> : null;
        const spinner = !data ? <Spinner/> : null;
        const content = data ?
            <Client {...data} updateClient={this.updateClient} validation={this.state.validation}/> : null;

        return (
            <div>
                {Error}
                <div className="person-details card top">
                    {errorMessage}
                    {spinner}
                    {content}
                </div>
            </div>
        )
    }
}
