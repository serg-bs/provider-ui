import React, {useState} from 'react';
import "./client.css"
import Menu from "../menu/menu";


const Client = (props) => {

    const [name, setName] = useState(props.name);
    const [surename, setSurename] = useState(props.surename);
    const [middlename, setMiddlename] = useState(props.middlename);
    const [login, setLogin] = useState(props.login);
    const [phone, setPhone] = useState(props.phone);
    const [email, setEmail] = useState(props.email);
    const [jwtToken, setJwtToken] = useState(props.jwtToken);

    const updateClient = () => {
        const payload = {
            name: name, surename: surename, middlename: middlename, login: login, phone: phone, email: email
        }
        props.updateClient(payload)

    }
    return (<div>
            <div className="person-details card top">
                <div className="card-body">
                    <form className="list-group">
                        <center className="term text-client-info">Данные пользователя</center>
                        <p className="p">Имя</p>
                        <input className="term style-name" placeholder="Имя" value={name}
                               onChange={n => setName(n.target.value)}></input>
                        <p className="p">Фамилия</p>
                        <input className="term style-surename" placeholder="Фамилия" value={surename}
                               onChange={s => setSurename(s.target.value)}></input>
                        <p className="p">Отчество</p>
                        <input className="term style-middlename" placeholder="Отчество" value={middlename}
                               onChange={m => setMiddlename(m.target.value)}></input>
                        <p className="p">Логин</p>
                        <input className="term style-login" placeholder="Логин" value={login}
                               onChange={l => setLogin(l.target.value)}></input>
                        <p className="p">Телефон</p>
                        <input className="term style-phone" placeholder="Телефон" value={phone}
                               onChange={p => setPhone(p.target.value)}></input>
                        <p className="p">Почта</p>
                        <input className="term style-email" placeholder="Почта" value={email}
                               onChange={e => setEmail(e.target.value)}></input>
                        <button type="button" className="btn btn-success save-position"
                                onClick={updateClient}>Cохранить
                        </button>
                    </form>
                </div>
            </div>
        </div>);
};
export default Client