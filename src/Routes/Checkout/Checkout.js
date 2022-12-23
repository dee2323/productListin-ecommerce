import React, { useState } from "react";
import Container from "../../components/Container/Container";
import './style.css'
import Form from "./Form/Form";
import OrderDetails from "./OrderDetails/OrderDetails";
import Confirm from "./ShowConfirm/Confirm";
import ShowLoading from "../../components/ShowLoading/ShowLoading";

const Checkout = ({ cartProducts, restTheCart }) => {
    const [confirm, setConfirm] = useState(false)
    const [showLoading, setLoading] = useState(false)

    return (
        <Container>
            {!confirm && <Form setConfirm={setConfirm} restTheCart={restTheCart} setLoading={setLoading} />}
            {!confirm && <OrderDetails cartProducts={cartProducts} />}
            {confirm && <Confirm />}
            {showLoading && <ShowLoading text='submitting' />}
        </Container>
    )
}
export default Checkout;