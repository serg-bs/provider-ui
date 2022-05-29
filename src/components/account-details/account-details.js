import React, {Component} from 'react';

import './account-details.css';
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import ErrorAuth from "../error-auth";
import AccountPage from "../account-page/account-page";
import MainPage from "../main-page/main-page";

export default class AccountDetails extends Component {

    state = {
        data: null,
        tariffName: '',
        hasError: false,
        isLoggedIn: this.props.isLoggedIn
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

    addPayment = (amount) => {
        const {jwtToken, swapiService} = this.props;
        swapiService.addPayment( {
            "accountId": this.state.data.id,
            "amount": amount,
            "payDateTime": Date.now()
        }, jwtToken)

    }

    render() {
        const {hasError, data, isLoggedIn} = this.state;
        if (!isLoggedIn) {
            return <ErrorAuth/>
        }

        const errorMessage = hasError ? <ErrorIndicator/> : null;
        const spinner = !data ? <Spinner /> : null;
        const content = data ? <AccountPage {...data} addPayment={this.addPayment} tariffName={this.state.tariffName}/> : null;

        return (
            <div className="person-details item-details card-position col-md-6 main-block-right ">
                {errorMessage}
                {spinner}
                {content}
            </div>
        )

    }
}
