import React from "react";
import "./list.css"
import Tariffsitems from "./tariffsitems";
const Tariffs = () => {
    const tariffData = [
        { name: "My first tariff", speed: 100, price: 1000},
        { name: "My second tariff", speed: 2000, price: 2000},
        { name: "My third tariff", speed: 9000, price: 3000}
    ];
    const elements = tariffData.map((item) => {
        return (
            <Tariffsitems tariff={item}/>
        )
    })
    return (
        <table className="table position">
            <thead className="list-head">
            <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">Speed</th>
                <th scope="col">Price</th>
                <th scope="coll">connect</th>
            </tr>
            </thead>
            <tbody>{elements}</tbody>
        </table>



    );
};
export default Tariffs
