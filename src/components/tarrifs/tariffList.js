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
            <p className="price__block contacts__text">
                Стоимость услуги вы можете уточнить по телефону горячей линнии
                <a href="8 (800) 550-33-33"> 8 (800) 550-33-33</a>
                 <pre> (звонок бесплатный)</pre>
                <BottomInterface/>
            </p>
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
