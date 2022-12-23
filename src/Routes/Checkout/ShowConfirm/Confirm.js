import React from "react";
import './style.css'
const Confirm = () => {
    return <>
        <div className="confirmed">
            <i class="fa fa-light fa-circle-check confirm-icon"></i>
            <span className="msg-confirmation">Thank You!</span>
            your order is submitted  </div>
    </>
}
export default Confirm;