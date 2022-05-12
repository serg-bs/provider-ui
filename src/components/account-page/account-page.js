import React from 'react';
import './account-page.css'

const AccountPage = (accountData) => {
    console.log(accountData)
    console.log('HHHHHH')
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
                </ul>
            </div>
        </div>
    );
};
export default AccountPage
