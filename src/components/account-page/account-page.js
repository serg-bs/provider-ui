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
                        <span className="term">address:</span>
                        <span>{accountData.address}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">balance:</span>
                        <span>{accountData.balance}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">status:</span>
                        <span>{status}</span>
                    </li>
                    <li className="list-group-item">
                        <input onChange={setPayAmount} placeholder="Кол.во дней" className="pay-position"></input>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default AccountPage
