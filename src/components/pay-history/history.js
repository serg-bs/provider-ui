import React from "react";
import "./history.css"
import Historyitems from './historyitems'
const Payments = (props) => {
    const {historyData} = props;

    const elements2 = historyData.map((item) => {
        return (
            <Historyitems {...item}/>
        )
    })
    console.log(elements2)
    return (
        <div className="person-details card top">
            <table className="table color">
                <thead className="list-head">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">amount</th>
                    <th scope="col">payDateTime</th>
                </tr>
                </thead>
                <tbody>{elements2}</tbody>
            </table>
        </div>
    );
};
export default Payments