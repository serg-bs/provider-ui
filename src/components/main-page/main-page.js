import React from 'react';
import './main-page.css'

const MainPage = (clientData) => {

    return (
        <div className="person-details card top">
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Name:</span>
                        <span>{clientData.name}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">Surename:</span>
                        <span>{clientData.surename}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">middlename:</span>
                        <span>{clientData.middlename}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">login:</span>
                        <span>{clientData.login}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="term">phone:</span>
                        <span>{clientData.phone}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">email:</span>
                        <span>{clientData.email}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default MainPage