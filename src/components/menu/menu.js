import React, {Component} from 'react'
import './menu.css';
import {Link} from "react-router-dom";

export default class Menu extends Component {
    render() {
const class1="btn btn-secondary"
        return (
            <ul className="list">
                <li>
                    <Link to="/" ><button type="button" className={class1}>Главная</button></Link>
                </li>
                <li>
                    <button type="button" className={class1}> Тарифы</button>
                </li>
                <li>
                    <button type="button" className={class1}> Платежи</button>
                </li>
                <li>
                    <button type="button" className={class1}> Инфо</button>
                </li>
            </ul>
        )
    };
}