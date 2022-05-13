import React, {useState} from 'react';
import './account-page.css'
import {render} from "react-dom";

const AccountPage = (accountData) => {
    const [payAmount, setPayAmount] = useState('');

    console.log(accountData)
    console.log('HHHHHH')
    // let status;
    // if (accountData.status===false){
    //     status = "Offline";
    // } else {
    //     status = "online";
    // }
    const status = accountData.status ? "Online":"Offline";
    return (
        <div className="person-details card top1">
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Адресс:</span>
                        <span>{accountData.address}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">Баланс:</span>
                        <span>{accountData.balance}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">Статус:</span>
                        <span>{status}</span>
                    </li>
                    <li className="list-group-item">
                        <input onChange={setPayAmount} placeholder="Сумма" className="pay-position"></input>
                        <button type="button" className="btn btn-success pay-button ">Оплатить :)</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default AccountPage
