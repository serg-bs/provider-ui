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
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="true"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="navbar-collapse collapse show" id="navbarColor02">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Главная
                                        <span className="visually-hidden"></span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
                                       role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </li>
                            </ul>
                            <form className="d-flex">
                                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
               )
               {/*//  <div>*/}
               {/*//  <div className="list" role="group" aria-label="Basic example">*/}
               {/*//      <Link className={class1} to="/">Главная</Link>*/}
               {/*//      <Link className={class1} to="/tariff">Тарифы</Link>*/}
               {/*//      <Link className={class1} to="/payments">Платежи</Link>*/}
               {/*//      <Link className={class1} to="/client">Инфо</Link>*/}
               {/*//      <Link className={class1} to="/login" onClick={onLogout}>Выход</Link>*/}
               {/*//  </div>*/}
               {/*// <div className="head-block"></div>*/}
               {/*//  </div>*/}

        }

        if (type === 'admin'){
            return (
                <div className="list btn-group" role="group" aria-label="Basic example">
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