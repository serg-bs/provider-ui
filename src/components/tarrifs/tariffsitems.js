import React from "react";

const Tariffsitems = (props) => {
    const {name, speed, price} = props;
    return (
        <tr>
            <th scope="row"></th>
            <td>{name}</td>
            <td>{speed}</td>
            <td>{price}</td>
            <td><button className="btn btn-primary" type="submit">connect</button></td>
        </tr>
    );
};
export default Tariffsitems