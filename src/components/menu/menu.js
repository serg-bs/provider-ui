import React, {Component} from 'react'
import './menu.css';
import {Link} from "react-router-dom";

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
                    <Link to="/" ><button type="button" className={class1}> Платежи</button></Link>
                </il>
                <il>
                    <Link to="/" ><button type="button" className={class1}> Инфо</button></Link>
                </il>
            </ul>
        )
    };
}