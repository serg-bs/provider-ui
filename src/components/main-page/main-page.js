import React, {useState} from 'react';
import './main-page.css'
import DummySwapiService from "../../services/dummy-swapi-service";

const MainPage = (clientData) => {
    const [payOn, setpayOn] = useState('');

    const props = new DummySwapiService()._account
        const status = props.status ? "Online" : "Offline";
    const class2 = "list-group-item"
    return (
        <div className="row mb2">
            <div className="person-details item-details card card-position col-md-6">
                <div className="card-body">
                    {/*list-group-flush*/}
                    <ul className="list-group ">
                        <li className={class2}>
                            <center>Информация о клиенте</center>
                        </li>
                        <li className={class2}>
                            <span className="term"><b>Name:</b></span>
                            <span>{clientData.name}</span>
                        </li>

                        <li className={class2}>
                            <span className="term"><b>Surename:</b></span>
                            <span>{clientData.surename}</span>
                        </li>

                        <li className={class2}>
                            <span className="term"><b>middlename: </b></span>
                            <span>{clientData.middlename}</span>
                        </li>

                        <li className={class2}>
                            <span className="term"><b>login: </b></span>
                            <span>{clientData.login}</span>
                        </li>

                        <li className={class2}>
                            <span className="term"><b>phone: </b></span>
                            <span>{clientData.phone}</span>
                        </li>
                        <li className={class2}>
                            <span className="term"><b>email: </b></span>
                            <span>{clientData.email}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="person-details item-details card card-position col-md-6 main-block-right ">
                <div className="card-body ">
                    <div>
                    <ul className="list-group">
                        <li className={class2}>
                            <center>Платежи по тарифам</center>
                        </li>
                        <li className={class2}>
                            <span><b>Тариф: </b></span>
                            <span>{props.tariffname}</span>
                        </li>
                        <li className={class2}>
                            <span><b>Баланс: </b></span>
                            <span>{props.balance}</span>
                        </li>
                        <li className={class2}>
                            <span><b>Статус: </b></span>
                            <span>{status}</span>
                        </li>
                        <li className={class2}>
                            <span><b>Адрес: </b></span>
                            <span>{props.address}</span>
                        </li>
                    </ul>
                        <div >
                            <input className="term style-name payOn" placeholder="Имя" value={payOn} onChange={l => setpayOn(l.target.value)}></input>
                            <button className="btn btn-success pay-button-position">Оплатить</button>
                        </div>
                        </div>

                </div>

            </div>
        </div>
    );
};
export default MainPage