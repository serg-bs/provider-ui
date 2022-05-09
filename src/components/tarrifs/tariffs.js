import React from "react";
import "./list.css"
import Tariffsitems from "./tariffsitems";
const Tariffs = (props) => {
    const {tariffData} = props;

    const elements = tariffData.map((item) => {
        return (
            <Tariffsitems {...item}/>
        )
    })
    console.log(elements)
    return (
        <div className="person-details card top">
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
        </div>
    );
};
export default Tariffs
