import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const productContext = createContext(null);

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([])
    useEffect(() => {
        axios(
            'https://fakestoreapi.com/products',
        ).then(res => {
            setProducts(res.data)
        }
        );
    }, []);
    const count = cartProducts.length;
    const addToCart = (id) => {
        const newProduct = products.find(item => item.id === id)
        let count = 0
        cartProducts.filter(item => {
            if (item.id === id) {
                count++;
            }
        })

        if (count === 0)
            setCartProducts([...cartProducts, { ...newProduct, count: 1 }])
        else {
            setCartProducts(cartProducts.map(item => {
                if (item.id === id) return { ...item, count: item.count + 1 }
                return item
            }))
        }

    }
    const deleteFromCart = (id) => {
        setCartProducts(cartProducts.filter(item => item.id !== id))
    }
    const addToCount = (id) => {
        setCartProducts(cartProducts.map(item => item.id !== id ? item : { ...item, count: item.count + 1 }))
    }
    const decreaseCount = (id) => {
        const item = cartProducts.find(item => item.id === id)
        if (item.count - 1 > 0)
            setCartProducts(cartProducts.map(item => item.id !== id ? item : { ...item, count: item.count - 1 }))
        else
            deleteFromCart(id)

    }
    const restTheCart = () => setCartProducts([])

    return <productContext.Provider value={{
        count, products, cartProducts,
        deleteFromCart, addToCart, restTheCart, decreaseCount, addToCount
    }}>{children}</productContext.Provider>
}
export default ProductProvider