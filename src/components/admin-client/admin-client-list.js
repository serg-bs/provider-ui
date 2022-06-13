import React, {useState} from "react";
import AdminClientItems from "./admin-client-items";
import "../admin-tariff/tariff-edit.css"

const AdminClientList = (props) => {
    const [name,setName] = useState('');
    const [sureName,setSureName] = useState('');
    const [middleName,setMiddleName] = useState('');
    const [address,setAddress] = useState('');
    const [id,setId] = useState('');


    const class5 = ("  admin-client-list-input row mb2")
    const {clients, deleteClient} = props;
    const filterClients = clients.filter( (item) =>
    {
        return (name !== '' ? item.name.indexOf(name) > -1 : true) &&
            (sureName !== '' ? item.surename.indexOf(sureName) > -1 : true) &&
            (middleName !== '' ? item.middlename.indexOf(middleName) > -1 : true) &&
            (address !== '' ? item.address.indexOf(address) > -1 : true) &&
            (id !== '' ? item.id.toString().indexOf(id) > -1 : true)
    })

    const elements = filterClients.map((item) => {
        return (
            <AdminClientItems {...item} deleteClient={deleteClient} />
        )
    })
    return (

            <table className="table ">
                <thead>
                <tr>
                    <th><input className={class5} placeholder="имя" value={name} onChange={o => setName(o.target.value)}></input></th>
                    <th scope="col"><input className={class5} placeholder="Фамилия" value={sureName} onChange={o => setSureName(o.target.value)} ></input></th>
                    <th scope="col"><input className={class5} placeholder="Отчество" value={middleName} onChange={o => setMiddleName(o.target.value)}></input></th>
                    <th scope="col"><input className={class5} placeholder="Адрес" value={address} onChange={o => setAddress(o.target.value)}></input></th>
                    <th scope="coll"><input className={class5} placeholder="ID" value={id} onChange={o => setId(o.target.value)}></input></th>
                    <th>
                        <button className="border-radius btn-success col-md-6">Поиск</button>
                    </th>
                </tr>
                </thead>
                <tbody>{elements}</tbody>
            </table>

    )
}
export default AdminClientList