import React, {Component} from 'react';


import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import ErrorAuth from "../error-auth";
import AdminClientList from "./admin-client-list";
import TariffList from "../tarrifs/tariffList";
import WindowComplete from "../tarrifs/window-complete";

export default class AdminClient extends Component {

    state = {
        data: null,
        hasError: false,
        isLoggedIn: this.props.isLoggedIn
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

    getClients = () => {
        const {jwtToken, swapiService} = this.props;
        swapiService.getClients(jwtToken)
            .then((data) => {
                this.setState({
                    data,
                    error: false
                });
            }).catch(this.onError);
    }

    componentDidMount() {
        this.getClients()
    }

    deleteClient = (clientId) => {
        const {jwtToken, swapiService} = this.props;
        swapiService.deleteClient(jwtToken, clientId)
            .then((data) => {
                this.setState({
                    error: false
                });
                return this.getClients()
            }).catch(this.onError);
    }

    getAccount = () => {
        const {jwtToken, swapiService} = this.props;
        // swapiService.getAccount(jwtToken)
        //     .then((data) => {
        //         this.setState({
        //             account: {...data}
        //         })
        //         return this.getTariff()
        //     }).catch(this.onError);
    }



    render() {
        const {hasError, data, isLoggedIn} = this.state;
        if (!isLoggedIn) {
            return <ErrorAuth/>
        }
        const {complete} = this.state;
        const errorMessage = hasError ? <ErrorIndicator/> : null;
        const spinner = !data ? <Spinner /> : null;
        const content = data ? <AdminClientList clients={data} deleteClient={this.deleteClient} ></AdminClientList> : null;
        const Error = complete ? <WindowComplete/> : null;
        return (
            <div>
                {Error}
                <div className="person-details card top">
                    {errorMessage}
                    {spinner}
                    {content}
                </div></div>
        )
    }
}
