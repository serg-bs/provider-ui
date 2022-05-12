import React, {Component} from 'react';
import './menu.css';
import {Link} from "react-router-dom";
import History from "../pay-history/history";

export default class Menu extends Component {
    render() {
const class1="btn btn-secondary"
        return (
            <ul className="list">
                <il>
                    <Link to="/" ><button type="button" className={class1}>Главная</button></Link>
                </il>
                <il>
                    <Link to="/tariff" ><button type="button" className={class1}> Тарифы</button></Link>
                </il>
                <il>
                    <Link to="/account" ><button type="button" className={class1}> Оплата</button></Link>
                </il>
                <il>
                    <Link to="/payments" ><button type="button" className={class1}> История Платежей</button></Link>
                </il>
                <il>
                    <Link to="/client" ><button type="button" className={class1}> Инфо</button></Link>
                </il>
            </ul>
        )
    };
}