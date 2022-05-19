import React, {useState} from "react";
import "./list.css"
import Tariffsitems from "./tariffsitems";
const Tariffs = (props) => {
    const [tariffname,settariffname] = useState('');
    const [tariffspeed,settariffspeed] = useState('');
    const [tariffprice,settariffprice] = useState('');
    const {tariffData, updateTariff} = props;

    const elements = tariffData.map((item) => {
        return (
            <Tariffsitems {...item} updateTariff={updateTariff}/>
        )
    })
    console.log(elements)
    const class3 = ('form-control')
    return (
        <div className="person-details card top">
        <table className="table position">
            <thead className="list-head ">
            <tr>
                <th scope="col"><button className="btn btn-success form-control">ADD</button></th>
                <th scope="col"><input className={class3} placeholder="Название" value={tariffname} onChange={o => settariffname(o.target.value)}></input></th>
                <th scope="col"><input className={class3} placeholder="Скорость" value={tariffspeed} onChange={o => settariffspeed(o.target.value)}></input></th>
                <th scope="col"><input className={class3} placeholder="Цена" value={tariffprice} onChange={o => settariffprice(o.target.value)}></input></th>
                <th>-------------</th>
            </tr>
            </thead>
            <tbody>{elements}</tbody>
        </table>
        </div>
    );
};
export default Tariffs
