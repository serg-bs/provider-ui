import React from "react";

const Tariffsitems = (props) => {
    const {id, name, speed, price, updateTariff, enabled} = props;


    const returnButton = () => {
        if (enabled) {
            return (
                <button  className="border-block btn-danger btn-xs" onClick={() => updateTariff(id)}>Block</button>
            )
        } else {
            return (
                <button className="border-block btn-secondary btn-xs" onClick={() => updateTariff(id)}>unblock</button>
            )
        }
    }

    return (
        <tr>
            <th scope="row"></th>
            <td>{name}</td>
            <td>{speed}</td>
            <td>{price}</td>
            <td>{returnButton()}</td>
        </tr>
    );
};
export default Tariffsitems