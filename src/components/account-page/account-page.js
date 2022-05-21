import React, {useState} from 'react';
import './account-page.css'

const AccountPage = (props) => {
    const [payAmount, setPayAmount] = useState('');

    const addPayment = () => {
        props.addPayment(payAmount)
    }
    const class2 = "list-group-item"
    const status = props.status ? "Online" : "Offline";
    return (
        <div className="person-details item-details card card-position col-md-6 main-block-right ">
            <div className="card-body ">
                <div>
                    <ul className="list-group">
                        <li className={class2}>
                            <center>Платежи по тарифам</center>
                        </li>
                        <li className={class2}>
                            <span><b>Тариф: </b></span>
                            <span>{props.tariffName}</span>
                        </li>
                        <li className={class2}>
                            <span><b>Баланс: </b></span>
                            <span>{props.balance}</span>
                        </li>
                        <li className={class2}>
                            <span><b>Статус: </b></span>
                            <span>{status}</span>
                        </li>
                        <li className={class2}>
                            <span><b>Адрес: </b></span>
                            <span>{props.address}</span>
                        </li>
                    </ul>
                    <div>
                        <input className="pay-position border" value={payAmount} onChange={e => setPayAmount(e.target.value)} placeholder="Сумма"></input>
                        <button type="button" className="btn btn-success pay-button" onClick={addPayment}>Оплатить :)</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AccountPage
