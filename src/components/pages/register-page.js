import React, {useState} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import SwapiService from "../../services/swapi-service";

const RegisterPage = ({history, isLoggedIn}) => {

    const [errorMessages, setErrorMessages] = useState('Имя пользователя не может быть пустым');
    const [loginError, setLoginError] = useState('');

    if (isLoggedIn) {
        return <Redirect to="/"/>;
    }

    const createAccount = (clientId) => {
        var {address} = document.forms[0];
        new SwapiService().createAccount({
                address: address.value,
                status: 'blocked',
                balance: 0,
                clientId: clientId,
                tariffId: 1
            }
        )
            .then(res => {
                return res.json();
            }).then(data => {
            history.push(`/login`);
        })
    };

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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (loginError !== '') {
            return;
        }

        var {name, surename, middlename, address, login, password, phone, email} = document.forms[0];
        new SwapiService().register(
            {
                name: name.value,
                surename: surename.value,
                middlename: middlename.value,
                address: address.value,
                login: login.value,
                password: password.value,
                phone: phone.value,
                email: email.value,
                type: 'client'
            }
        ).then((res) => {
            return res.json();
        }).then(data => {
            if (data.message) {
                console.log(data)
                setErrorMessages(data.message)
            } else {
                console.log(data)
                return createAccount(data.id)
            }
        });
    }

    const renderErrorMessage = () => (
        errorMessages !== "" && (
            <div className="error-indicator">{errorMessages}</div>)
    );

    const renderLoginMessage = () => (
        loginError !== "" && (
            <div className="error-indicator">{loginError}</div>)
    );

    return (
        <div className="jumbotron">
            <p>Регистрация пользователя</p>
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
                    <input id="surename"
                           name="surename"
                           value="Kollmann"
                           className="form-control"
                           placeholder="Введите логин"></input>
                    <label htmlFor="name" className="form-label mt-4">Отчество</label>
                    <input id="middlename"
                           name="middlename"
                        // value="serg"
                           className="form-control"
                           placeholder="Введите логин"></input>
                    <label htmlFor="name" className="form-label mt-4">Адрес</label>
                    <input id="address"
                           name="address"
                           value="Владимир "
                           className="form-control"
                           placeholder="Введите Адрес"></input>
                    <label htmlFor="name" className="form-label mt-4">email</label>
                    <input id="email"
                           name="email"
                        // value="serg"
                           className="form-control"
                           placeholder="Введите почту"></input>
                    <label htmlFor="name" className="form-label mt-4">Телефон</label>
                    <input id="phone"
                           name="phone"
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
                        Регистрация
                    </button>
                </div>
            </form>
        </div>
    );
}

export default withRouter(RegisterPage);

