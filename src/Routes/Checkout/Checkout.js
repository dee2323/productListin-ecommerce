import React, { useState } from "react";
import Container from "../../components/Container/Container";
import './style.css'
import Form from "./Form/Form";
import OrderDetails from "./OrderDetails/OrderDetails";
import Confirm from "./ShowConfirm/Confirm";
import ShowLoading from "../../components/ShowLoading/ShowLoading";


const Checkout = () => {
    const [confirm, setConfirm] = useState(false)
    const [showLoading, setLoading] = useState(false)

    return (
        <Container>
            {!confirm && <Form setConfirm={setConfirm} setLoading={setLoading} />}
            {!confirm && <OrderDetails />}
            {confirm && <Confirm />}
            {showLoading && <ShowLoading text='submitting' />}
        </Container>
    )
}
export default Checkout;