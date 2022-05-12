import React from "react";
const Historyitems = (props) => {
    const {payDateTime, amount} = props;
    return (
        <tr>
            <th scope="row"></th>
            <td>{amount}</td>
            <td>{payDateTime}</td>
        </tr>
    );
};
export default Historyitems