import React, {Component} from 'react';
import './menu.css';
import {Link} from "react-router-dom";
import jwt from "jwt-decode";
import "./telecom_logo.png"
import HeadStyle from "../../background-style/head-style";
import img from "./telecom_logo.png"

export default class Menu extends Component {
    state = {
      show: false
    };
    menuLabelClick = () => {
        console.log("hhhhhhhhhhhhhhhhhh")
      this.setState(({show})=> {
          return {
           show: !show
          };
      })
    };
    render() {
        const { show } = this.state;
        let className = "navbar-collapse collapse";
        if (show) {
            className += ' show';
        }
        const {jwtToken, onLogout} = this.props;
        const {type} = jwt(jwtToken);
        const class1 = "btn btn-secondary"
        if (type === 'client'){
            return (
                <div>
                    <div><HeadStyle/></div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#" src={img}></a>
                        <button onClick={this.menuLabelClick} className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="true"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={className} id="navbarColor02">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" href="#">Главная
                                        <span className="visually-hidden"></span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/tariff" className="nav-link" href="#">Тарифы</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/payments" className="nav-link" href="#">Платежи</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/client" className="nav-link" href="#">Инфо</Link>
                                </li>

                            </ul>
                            <div className="margin-inline-end">
                            <form className="d-flex exit-button-position">
                                    <Link to="/login" onClick={onLogout} className="nav-linkmy-2 my-sm-0 " type="submit">Выйти</Link>
                            </form>
                            </div>
                        </div>
                    </div>
                </nav>
                </div>
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