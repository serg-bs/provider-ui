import React from "react";
import "./list.css"
import Tariffsitems from "./tariffsitems";
import BottomInterface from "../../ bottom-interface/bottom-interface";

const TariffList = (props) => {
    const {tariffData, updateTariff, current} = props;
    console.log(`current=${current}`)


    const elements = tariffData.map((item) => {
        return (
            <Tariffsitems {...item} updateTariff={updateTariff} connected={current === item.id}/>
        )
    })
    return (
        <div>
        <h1 className="head-tariff-word" align="center">Тарифы</h1>
        <div className="top">
        <div className="tariff__block">
            <div className="tariff__wrapper">
                <div className="tariff1"></div>
            </div>
            <div className="tariff__wrapper">
                <div className="tariff1"></div>
            </div>
            <div className="tariff__wrapper">
                <div className="tariff1"></div>
            </div>
            <div className="tariff__wrapper">
                <div className="tariff1"></div>
            </div>
            <div className="tariff__wrapper">
                <div className="tariff1"></div>
            </div>
        </div>
        </div>
        </div>
            // <table className="table position">
            //     <thead className="list-head">
            //     <tr>
            //         <th scope="col">#</th>
            //         <th scope="col">name</th>
            //         <th scope="col">Speed</th>
            //         <th scope="col">Price</th>
            //         <th scope="coll">connect</th>
            //     </tr>
            //     </thead>
            //     <tbody>{elements}</tbody>
            // </table>
    );
};
export default TariffList
