import React, {useState} from 'react';
import './main-page.css'
import DummySwapiService from "../../services/dummy-swapi-service";

const MainPage = (clientData) => {
    const class2 = "list-group-item"
    return (

            <div className="card-body">
                <ul className="list-group ">
                    <li className={class2}>
                        <center>Информация о клиенте</center>
                    </li>
                    <li className={class2}>
                        <span className="term"><b>Имя:</b></span>
                        <span>{clientData.name}</span>
                    </li>

                    <li className={class2}>
                        <span className="term"><b>Фамилия:</b></span>
                        <span>{clientData.surename}</span>
                    </li>

                    <li className={class2}>
                        <span className="term"><b>Отчество: </b></span>
                        <span>{clientData.middlename}</span>
                    </li>

                    <li className={class2}>
                        <span className="term"><b>Логин: </b></span>
                        <span>{clientData.login}</span>
                    </li>

                    <li className={class2}>
                        <span className="term"><b>Телефон: </b></span>
                        <span>{clientData.phone}</span>
                    </li>
                    <li className={class2}>
                        <span className="term"><b>Почта: </b></span>
                        <span>{clientData.email}</span>
                    </li>
                </ul>
            </div>

    );
};
export default MainPage