import React from "react";
import ReactDOM from "react-dom";
import DummySwapiService from "../../services/dummy-swapi-service";
import Tariffsitems from "../tarrifs/tariffsitems";
import AdminClientItems from "./admin-client-items";
import "../admin-tariff/tariff-edit.css"
const AdminClient = () => {
    const class5 = ("  admin-client-list-input row mb2")
    let clients = new DummySwapiService()._clients;
const  elements = clients.map ((item) => {
return (
<AdminClientItems {...item} />
)
})
    return (
        <div className="card top person-details">
          <table className="table ">
              <thead>
              <tr>
                  <th><input className={class5} placeholder="имя"></input></th>
                  <th scope="col"><input className={class5} placeholder="Фамилия"></input></th>
                  <th scope="col"><input className={class5} placeholder="Отчество"></input></th>
                  <th scope="col"><input className={class5} placeholder="Адресс"></input></th>
                  <th scope="coll"><input className={class5} placeholder="ID"></input></th>
                  <th><button className="border-radius btn-success col-md-6">Поиск</button></th>
              </tr>
              </thead>
              <tbody>{elements}</tbody>
          </table>
        </div>
    )
}
export default AdminClient