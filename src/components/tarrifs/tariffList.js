import React from "react";
import "./list.css"
import Tariffsitems from "./tariffsitems";

const TariffList = (props) => {
    const {tariffData, updateTariff, current} = props;
    console.log(`current=${current}`)


    const elements = tariffData.map((item) => {
        return (
            <Tariffsitems {...item} updateTariff={updateTariff} connected={current === item.id}/>
        )
    })
    return (
            <table className="table position">
                <thead className="list-head">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Имя тарифа</th>
                    <th scope="col">Скорость</th>
                    <th scope="col">Цена</th>
                    <th scope="coll">Подключить</th>
                </tr>
                </thead>
                <tbody>{elements}</tbody>
            </table>
    );
};
export default TariffList
