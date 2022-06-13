import React from "react";

const Tariffsitems = (props) => {
    const {id, name, speed, price, updateTariff, disabled} = props;


    const returnButton = () => {
        if (disabled) {
            return (
                <button className="border-block btn-secondary btn-xs" onClick={() => updateTariff(id, false)}>Разблокировать</button>
            )
        } else {
            return (
                <button  className="border-block btn-danger btn-xs"  onClick={() => updateTariff(id, true)}>Блокировать</button>
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