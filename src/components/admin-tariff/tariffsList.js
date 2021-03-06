import React, {useState} from "react";
import "./list.css"
import Tariffsitems from "./tariffsitems";
const TariffsList = (props) => {
    const [tariffname,settariffname] = useState('');
    const [tariffspeed,settariffspeed] = useState('');
    const [tariffprice,settariffprice] = useState('');
    const {tariffData, updateTariff} = props;

    const elements = tariffData.map((item) => {
        return (
            <Tariffsitems {...item} updateTariff={updateTariff}/>
        )
    })

    const addTariff = () => {
        props.addTariff(tariffname, tariffspeed, tariffprice)
    }

    console.log(elements)
    const class3 = ('border-block row mb2 col-md-6')
    return (
        <table className="table color-element">
            <thead className="list-head ">
            <tr>
                <th scope="col"></th>
                <th scope="col"><input className={class3} placeholder="Название" value={tariffname} onChange={o => settariffname(o.target.value)}></input></th>
                <th scope="col"><input className={class3} placeholder="Скорость" value={tariffspeed} onChange={o => settariffspeed(o.target.value)}></input></th>
                <th scope="col"><input className={class3} placeholder="Цена" value={tariffprice} onChange={o => settariffprice(o.target.value)}></input></th>
                <th scope="col"><button className="border-block btn-success" onClick={addTariff}>Добавить</button></th>
            </tr>
            </thead>
            <tbody>{elements}</tbody>
        </table>
    );
};
export default TariffsList
