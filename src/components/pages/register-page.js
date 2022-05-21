import React, {useState} from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import SwapiService from "../../services/swapi-service";

const Register = ({info}) => {

    const [errorMessages, setErrorMessages] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (loginError !== '') {
            return;
        }

        var {name, lastname, login, password} = document.forms[0];
        let res = new SwapiService().register(
            {
                name: name.value,
                lastname: lastname.value,
                login: login.value,
                password: password.value
            }
        ).then((res) => {
            if (!res.ok) {
                return res.json();
            } else {
                info.push(`/login`);
            }
        }).then(data => {
            if (data) {
                console.log(data)
                setErrorMessages(data.message)
            }
        });
    }

    const checkLogin = () => {
        var {login} = document.forms[0];
        new SwapiService().findByLogin(login.value)
            .then(res => {
                return res.json();
            }).then(data => {
            if (data.found === true) {
                setLoginError('Такой логин уже занят')
            } else {
                setLoginError('')
            }
        })
    };

    const renderErrorMessage = () => (
        errorMessages !== "" && (
            <div className="error">{errorMessages}</div>)
    );

    const renderLoginMessage = () => (
        loginError !== "" && (
            <div className="error-indicator">{loginError}</div>)
    );

    return (
        <div className="jumbotron">
            <p>Информация</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {renderErrorMessage()}
                    <label htmlFor="name" className="form-label mt-4">Имя</label>
                    <input id="name"
                           name="name"
                           value="Patric"
                           className="form-control"
                           placeholder="Введите имя"></input>
                    <label htmlFor="name" className="form-label mt-4">Фамилия</label>
                    <input id="lastname"
                           name="lastname"
                           value="Kollmann"
                           className="form-control"
                           placeholder="Введите логин"></input>
                    <label htmlFor="name" className="form-label mt-4">Отчество</label>
                    <input id="middlename"
                           name="middlename"
                        // value="serg"
                           className="form-control"
                           placeholder="Введите логин"></input>
                    <label htmlFor="name" className="form-label mt-4">Адресс</label>
                    <input id="address"
                           name="address"
                           value="Владимир "
                           className="form-control"
                           placeholder="Введите адресс"></input>
                    <label htmlFor="name" className="form-label mt-4">email</label>
                    <input id="email"
                           name="email"
                        // value="serg"
                           className="form-control"
                           placeholder="Введите почту"></input>
                    <label htmlFor="name" className="form-label mt-4">Телефон</label>
                    <input id="telephone"
                           name="telephone"
                        // value="serg"
                           className="form-control"
                           placeholder="Введите телефон"></input>
                    <label htmlFor="name" className="form-label mt-4">Логин</label>
                    <input id="login"
                           name="login"
                        // value="serg"
                           className="form-control"
                           placeholder="Введите логин"
                           onChange={checkLogin}
                    ></input>
                    {renderLoginMessage()}
                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                    <input id="password"
                           name="password"
                           type="password"
                        // value="password"
                           className="form-control"
                           placeholder="Введите пароль"></input>
                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Повторите пароль</label>
                    <input id="password2"
                           name="password2"
                           type="password"
                        // value="password"
                           className="form-control"
                           placeholder="Введите пароль"></input>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default withRouter(Register);

