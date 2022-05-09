import React from 'react';
import './main-page.css'

const MainPage = (clientData) => {

    return (
        <div>
            <div className="Par">
                <p>{clientData.name}</p>
                <p>{clientData.surename}</p>
                <p>{clientData.middlename}</p>
                <p> {clientData.address}</p>
                <p> {clientData.login}</p>
                <p> {clientData.phone}</p>
                <p> {clientData.email}</p>
            </div>
            <div className="info">
                <p>Фамилия</p>
                <p>Имя</p>
                <p>Отчество</p>
                <p>Адрес</p>
                <p>Тариф</p>
                <p>Баланс</p>
                <p>Статус</p>
            </div>
        </div>
    );
};
export default MainPage