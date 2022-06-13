import React from "react";
import ReactDOM from "react-dom";
import "./window-complete.css"
import img from "./complete.png"


const WindowComplete = (props) => {

    return (
        <div className="wrapper container col-md-6 ">
        <div className="WindowComplete person-details BackBlack">
            <div className="TextWindowPosition">{props.title}</div>
            <img className="ImgWindow" src={img} alt=""></img>
            <button onClick={props.okComplete}  type="button" className="btn btn-success OkButton">Ок</button>
        </div>
</div>
    )
}
export default WindowComplete