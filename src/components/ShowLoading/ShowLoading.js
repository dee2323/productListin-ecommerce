import React from "react";
import './style.css'
const ShowLoading = ({ text }) => {
    return (
        <div className="loading"><i class="fa fa-spinner fa-spin "> </i>{text}</div>
    )
}
export default ShowLoading;