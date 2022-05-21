import React, {useState} from 'react';
import './account-page.css'
import jwt from "jwt-decode";

const AccountPage = (props) => {
    const [payAmount, setPayAmount] = useState('');

    // let status;
    // if (accountData.status===false){
    //     status = "Offline";
    // } else {
    //     status = "online";
    // }

    const hi = () => {
        props.addPayment(jwt())
    }
    const status = props.status ? "Online":"Offline";
    return (
        <div className="person-details card top1">
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Адресс:</span>
                        <span>{props.address}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">Баланс:</span>
                        <span>{props.balance}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">Статус:</span>
                        <span>{status}</span>
                    </li>
                    <li className="list-group-item">
                        <input value={payAmount} onChange={e => setPayAmount(e.target.value)} placeholder="Сумма" className="pay-position border"></input>
                        <button type="button" className="btn btn-success pay-button" onClick={hi}>Оплатить :)</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default AccountPage
