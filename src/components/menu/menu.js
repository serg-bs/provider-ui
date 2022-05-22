import React, {Component} from 'react';
import './menu.css';
import {Link} from "react-router-dom";
import jwt from "jwt-decode";

export default class Menu extends Component {
    render() {
        const {jwtToken, onLogout} = this.props;
        const {type} = jwt(jwtToken);
        const class1 = "btn btn-secondary"
        if (type === 'client'){
            return (
                <div className="list btn-group list" role="group" aria-label="Basic example">
                    <Link className={class1} to="/">Главная</Link>
                    <Link className={class1} to="/tariff">Тарифы</Link>
                    <Link className={class1} to="/payments">Платежи</Link>
                    <Link className={class1} to="/client">Инфо</Link>
                    <Link className={class1} to="/login" onClick={onLogout}>Выход</Link>
                </div>
            )
        }

        if (type === 'admin'){
            return (
                <div className="list btn-group list" role="group" aria-label="Basic example">
                    <Link className={class1} to="/">Главная</Link>
                    <Link className={class1} to="/admin/tariff">Редактирование Тарифов</Link>
                    <Link className={class1} to="/admin/client">Редактирование клиентов</Link>
                    <Link className={class1} to="/client">Инфо</Link>
                    <Link className={class1} to="/login" onClick={onLogout}>Выход</Link>
                </div>
            )
        }
    };
}