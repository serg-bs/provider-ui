import React from "react";

const Tariffsitems = (props) => {
    const {id, name, speed, price, updateTariff} = props;

    return (
        <tr>
            <th scope="row"></th>
            <td>{name}</td>
            <td>{speed}</td>
            <td>{price}</td>
            <td><button className="btn btn-primary" onClick={() =>updateTariff(id)}>connect</button></td>
        </tr>
    );
};
export default Tariffsitems