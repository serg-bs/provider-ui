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
                    <button type="button" className={class1}> Тарифы</button>
                </il>
                <il>
                    <button type="button" className={class1}> Платежи</button>
                </il>
                <il>
                    <button type="button" className={class1}> Инфо</button>
                </il>
            </ul>
        )
    };
}