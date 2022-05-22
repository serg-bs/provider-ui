import React from "react";
import "./list.css"
import Tariffsitems from "./tariffsitems";

const Tariffs = (props) => {
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
