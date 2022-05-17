import React, {useState} from 'react';

const Client = () => {
    const [clientName,setclientName] = useState('');

    const [clientsurename,setclientsurename] = useState('');
    const [clientmiddlename, setclientmiddlename] = useState('');
    const [clientlogin,setclientlogin] = useState('');
    const [clientphone,setclientphone] = useState('');
    const [clientemail,setclientemail] = useState('');

    return (
        <div className="person-details card top">
            <div className="card-body">
                <form className="list-group list-group-flush">
                        <span className="term">Данные пользователя</span>
                        <input className="term" placeholder="Name" value={clientName} onChange={n => setclientName(n.target.value)}></input>
                        <input className="term" placeholder="Surename" value={clientsurename} onChange={s => setclientsurename(s.target.value)}></input>
                        <input className="term" placeholder="middlename" value={clientmiddlename} onChange={m => setclientmiddlename(m.target.value)}></input>
                        <input className="term" placeholder="login" value={clientlogin} onChange={l => setclientlogin(l.target.value)}></input>
                        <input className="term" placeholder="phone" value={clientphone} onChange={p => setclientphone(p.target.value)}></input>
                        <input className="term" placeholder="email" value={clientemail} onChange={e => setclientemail(e.target.value)}></input>
                </form>
            </div>
        </div>
    );
};
export default Client