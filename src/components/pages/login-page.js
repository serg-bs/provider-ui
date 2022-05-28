import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import "./login-page.css"


const LoginPage = ({isLoggedIn, onLogin}) => {

    const [errorMessages, setErrorMessages] = useState('Вы ввели неправильный логин, пароль!');

    if (isLoggedIn) {
        return <Redirect to="/"/>;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        var {login, password} = document.forms[0];
        const response =  onLogin({login: login.value, password: password.value});
        response.catch((res) => {
            setErrorMessages('Вы ввели неправильный логин, пароль!');
        })

        console.log(response);
    }

    const renderErrorMessage = () =>(
        errorMessages !== "" && (
            <div className="error-indicator">{errorMessages}</div>)
        );

    return (
        <div className="jumbotron">
            <p>Вход в личный кабинет пользователя</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {renderErrorMessage()}
                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Login</label>
                    <input id="login"
                           name="login"
                           // value="serg"
                           className="form-control"
                           placeholder="Введите логин"></input>
                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                    <input id="password"
                           name="password"
                           type="password"
                           // value="password"
                           className="form-control"
                           placeholder="Введите пароль"></input>
                    <p>First time? <Link to="/register">Create an account</Link>.</p>
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

export default LoginPage;

