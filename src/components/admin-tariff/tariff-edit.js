import React, {Component} from 'react';

import './tariff-edit.css';
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import ErrorAuth from "../error-auth";
import TariffsList from "./tariffsList";
import AdminClientList from "../admin-client/admin-client-list";
import WindowComplete from "../tarrifs/window-complete";

export default class TariffEdit extends Component {

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

    addTariff = (tariffname, tariffspeed, tariffprice) => {
        const {jwtToken, swapiService} = this.props;
        swapiService.addTariff( {
            "name": tariffname,
            "speed": tariffspeed,
            "price": tariffprice
        }, jwtToken).then(() => {
            return this.getTariff();
        })
    }

    updateTariff = (tariffId, disabled) => {
        const {jwtToken, swapiService} = this.props;
        let tariff = this.state.data.filter(item => item.id == tariffId);
        swapiService.updateTariff(tariffId, {
            "name": tariff.name,
            "speed": tariff.speed,
            "price": tariff.price,
            "disabled": disabled
        }, jwtToken).then(() => {
            return this.getTariff();
        })
    }

    render() {
        const {hasError, data, isLoggedIn} = this.state;
        if (!isLoggedIn) {
            return <ErrorAuth/>
        }
        const {complete} = this.state;
        const errorMessage = hasError ? <ErrorIndicator/> : null;
        const spinner = !data ? <Spinner /> : null;
        const content = data ? <TariffsList tariffData={data} addTariff={this.addTariff} updateTariff={this.updateTariff}
                                            current={this.state.account.tariffId}></TariffsList> : null;
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
