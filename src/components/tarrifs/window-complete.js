import React from "react";
import ReactDOM from "react-dom";
import "./window-complete.css"
import img from "./complete.png"

const WindowComplete = () => {

    return (
        <div className="wrapper">
        <div className="WindowComplete person-details BackBlack">
            <div className="TextWindowPosition">Подключено</div>
            <img className="ImgWindow" src={img} alt=""></img>
            <button  type="button" className="btn btn-success OkButton">Ок</button>
        </div>
            <div className="InterfaceBackground"></div>
</div>
    )
}
export default WindowComplete