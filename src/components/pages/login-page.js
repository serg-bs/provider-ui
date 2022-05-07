import React, {useState} from 'react';
// import { Redirect } from 'react-router-dom';


const LoginPage = ({isLoggedIn, onLogin}) => {

    // if (isLoggedIn) {
    //     return <Redirect to="/"/>;
    // }
    const handleSubmit = (event) => {
        event.preventDefault();
        var {login, password} = document.forms[0];
        console.log('Hi0');
        console.log(login.value);
        console.log(password.value);
        console.log('Hi');
        const response =  onLogin({login: login.value, password: password.value});
        // response.then((data)=> {
        //     console.log(data);
        // })
        console.log('Hi2');
        console.log(response);
    }


    return (
        <div className="jumbotron">
            <p>Login to see secret page!</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Login</label>
                    <input id="login"
                           name="login"
                           value="serg"
                           className="form-control"
                           placeholder="Введите логин"></input>
                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                    <input id="password"
                           name="password"
                           type="password"
                           value="password"
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

export default LoginPage;

