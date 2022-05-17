import React, {useState} from 'react';
import "./client.css"
import Menu from "../components/menu/menu";

const Client = () => {
    const [clientName,setclientName] = useState('');
    const [clientsurename,setclientsurename] = useState('');
    const [clientmiddlename, setclientmiddlename] = useState('');
    const [clientlogin,setclientlogin] = useState('');
    const [clientphone,setclientphone] = useState('');
    const [clientemail,setclientemail] = useState('');

    return (
        <div>
        <Menu/>
        <div className="person-details card top">
            <div className="card-body">
                <form className="list-group">
                        <center className="term text-client-info">Данные пользователя</center>
                    <p className="p">Имя</p>
                        <input className="term style-name" placeholder="Имя" value={clientName} onChange={n => setclientName(n.target.value)}></input>
                    <p className="p">Фамилия</p>
                        <input className="term style-surename" placeholder="Фамилия" value={clientsurename} onChange={s => setclientsurename(s.target.value)}></input>
                    <p className="p">Отчество</p>
                        <input className="term style-middlename" placeholder="Отчество" value={clientmiddlename} onChange={m => setclientmiddlename(m.target.value)}></input>
                    <p className="p">Логин</p>
                        <input className="term style-login" placeholder="Логин" value={clientlogin} onChange={l => setclientlogin(l.target.value)}></input>
                    <p className="p">Телефон</p>
                        <input className="term style-phone" placeholder="Телефон" value={clientphone} onChange={p => setclientphone(p.target.value)}></input>
                    <p className="p">Почта</p>
                        <input className="term style-email" placeholder="Почта" value={clientemail} onChange={e => setclientemail(e.target.value)}></input>
                    <button type="button" className="btn btn-success save-position">Cохранить</button>
                </form>
            </div>
        </div>
        </div>
    );
};
export default Client