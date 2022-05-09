import React, {Component} from 'react'
import './menu.css';
import {Link} from "react-router-dom";

export default class Menu extends Component {
    state = {
        done: false
    };
    MainClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        });
    };

    render() {
        const {done} = this.state;

        let class1 = 'style ';
        if (done) {
            class1 += 'Status';
        }
        console.log({class1})

        return (
            <ul className="list">
                <il>
                    <Link to="/" ><button className={class1}>Главная</button></Link>
                </il>
                <il className="block-2">
                    <button className={class1}> Тарифы</button>
                </il>
                <il className="block-3">
                    <button className={class1}> Платежи</button>
                </il>
                <il className="block-4">
                    <button className={class1}> Инфо</button>
                </il>
            </ul>
        )
    };
}