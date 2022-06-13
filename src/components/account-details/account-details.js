import React, {Component} from 'react';

import './account-details.css';
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import ErrorAuth from "../error-auth";
import AccountPage from "../account-page/account-page";
import MainPage from "../main-page/main-page";
import WindowComplete from "../tarrifs/window-complete";

export default class AccountDetails extends Component {

    state = {
        data: null,
        tariffName: '',
        hasError: false,
        isLoggedIn: this.props.isLoggedIn,
        completePay: false
    };

    onError = (error) => {
        console.log(error)
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

    getTariff = (tariffId) => {
        const {jwtToken, swapiService} = this.props;
        swapiService.getTariff(tariffId, jwtToken)
            .then((data) => {
                console.log(data)
                this.setState({
                    tariffName: data.name,
                    error: false
                });
            }).catch(this.onError);

    }

    update = () => {
        const {jwtToken, swapiService} = this.props;
        swapiService.getAccount(jwtToken)
            .then((data) => {
                this.setState({
                    data,
                    error: false
                });
                this.getTariff(data.tariffId)

            }).catch(this.onError);
    }

    componentDidMount() {
        this.update();
    }
    okCompletePay = () => {
        this.setState({
            completePay: false
        })
    }
    addPayment = (amount) => {
        const {jwtToken, swapiService} = this.props;
        swapiService.addPayment( {
            "accountId": this.state.data.id,
            "amount": amount,
            "payDateTime": Date.now()
        }, jwtToken)

            this.setState({
                completePay: true
            })
    }

    render() {
        const {completePay} = this.state;
        const {hasError, data, isLoggedIn} = this.state;
        if (!isLoggedIn) {
            return <ErrorAuth/>
        }

        const errorMessage = hasError ? <ErrorIndicator/> : null;
        const spinner = !data ? <Spinner /> : null;
        const content = data ? <AccountPage {...data} addPayment={this.addPayment} tariffName={this.state.tariffName}/> : null;
        const Error = completePay ? <WindowComplete title="Оплаченно" okComplete={this.okCompletePay}/> : null;
        return (
<div className="col-md-6">
    {Error}
                <div className="person-details item-details card card-position">
                {errorMessage}
                {spinner}
                {content}
    </div>
    </div>

        )

    }
}
