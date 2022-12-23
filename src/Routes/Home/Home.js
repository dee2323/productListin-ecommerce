import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import ShowLoading from "../../components/ShowLoading/ShowLoading";
const Home = ({ products, addToCart }) => {
    const [show, setShow] = useState(false)
    const listProducts = products.length > 0 ? products.map(product => <Card setShow={setShow} addToCart={addToCart} {...product} />) : <i class="fa fa-spinner fa-spin " style={{ fontSize: '4rem', color: 'rgb(78, 104, 126)', marginTop: '15rem', marginLeft: '40rem' }}> </i>
    return (
        <Container>
            {show && <ShowLoading text={'Adding to cart'} />}
            {listProducts}
        </Container>
    )
}
export default Home;