import React, {Component} from 'react';
import './menu.css';
import {Link} from "react-router-dom";

export default class Menu extends Component {
    render() {
        const class1 = "btn btn-secondary"
        return (
            <div className="list btn-group list" role="group" aria-label="Basic example">
                <Link className={class1} to="/">Главная</Link>
                <Link className={class1} to="/tariff">Тарифы</Link>
                <Link className={class1} to="/account">Оплата</Link>
                <Link className={class1} to="/payments">Платежи</Link>
                <Link className={class1} to="/client">Инфо</Link>

            </div>
        )
    };
}