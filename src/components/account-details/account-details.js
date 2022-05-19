import React, {Component} from 'react';

import './account-details.css';
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import ErrorAuth from "../error-auth";
import Menu from "../menu/menu";
import AccountPage from "../account-page/account-page";

export default class AccountDetails extends Component {

    state = {
        data: null,
        hasError: false,
        isLoggedIn: true
    };

    onError = (error) => {
        console.log('TTTTTTTTTTTTT')
        console.log(error)
        console.log('TTTTTTTTTTTTT')
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

    update = () => {
        const {jwtToken, swapiService} = this.props;
        swapiService.getAccount(jwtToken)
            .then((data) => {
                console.log('TTTTTTTTTTTTT')
                console.log(data)
                console.log('TTTTTTTTTTTTT')
                this.setState({
                    data,
                    error: false
                });
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
        if (hasError) {
            return <ErrorIndicator/>
        }
        if (!data) {
            return <Spinner/>;
        }
        return (
            <div>
                <Menu/>
                <AccountPage {...data} addPayment={this.addPayment}/>
            </div>
        )
    }
}
