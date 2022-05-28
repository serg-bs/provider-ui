import React, {Component} from 'react';

import './tariff-details.css';
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import ErrorAuth from "../error-auth";
import Menu from "../menu/menu";
import TariffList from "../tarrifs/tariffList";

export default class TariffDetails extends Component {

    state = {
        data: null,
        account: {},
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

    getTariff = () => {
        const {jwtToken, swapiService} = this.props;
        swapiService.getTariffs(jwtToken)
            .then((data) => {
                this.setState({
                    data,
                    error: false
                });
            }).catch(this.onError);
    }

    componentDidMount() {
        this.getTariff()
        this.getAccount()
    }

    updateAccount = (account) => {
        const {jwtToken, swapiService} = this.props;
        swapiService.updateAccount(jwtToken, account)
            .then((data) => {
                this.setState({
                    error: false
                });
                this.getTariff()
            }).catch(this.onError);
    }

    getAccount = () => {
        const {jwtToken, swapiService} = this.props;
        swapiService.getAccount(jwtToken)
            .then((data) => {
                this.setState({
                    account: {...data}
                })
                return this.getTariff()
            }).catch(this.onError);
    }

    updateTariff = (tariffId) => {
        var account = {...this.state.account}
        account.tariffId = tariffId
        this.updateAccount(account)
        this.setState({
            account: {...account}
        })
    }

    render() {
        const {hasError, data, isLoggedIn} = this.state;
        if (!isLoggedIn) {
            return <ErrorAuth/>
        }
        const errorMessage = hasError ? <ErrorIndicator/> : null;
        const spinner = !data ? <Spinner /> : null;
        const content = data ? <TariffList tariffData={data} updateTariff={this.updateTariff}
                                           current={this.state.account.tariffId}></TariffList> : null;
        return (
            <div className="person-details card top">
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}
