import React from "react";

const Tariffsitems = (props) => {
    const {id, name, speed, price, updateTariff, connected} = props;

    const className = connected ? 'table-success' : ''

    const returnButton = () => {
        console.log(`connected=${connected}`)
        if (!connected) {
            return (<button className="border btn-primary" onClick={() => updateTariff(id)}>connect</button>)
        } else {
            return ('')
        }
    }
    return (
                    <div className="tariff__wrapper">
                        <div className="tariff1"></div>
                    </div>
    )
    // return (
    //     <tr className={className}>
    //         <th scope="row"></th>
    //         <td>{name}</td>
    //         <td>{speed}</td>
    //         <td>{price}</td>
    //         <td>
    //             {returnButton()}
    //         </td>
    //     </tr>
    // );
};
export default Tariffsitems