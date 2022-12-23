import React, { useState, useContext } from "react";
import { productContext } from "../../../context/productContext";
import { Link } from "react-router-dom";
import './style.css'
const Form = ({ setConfirm, setLoading }) => {
    const { restTheCart } = useContext(productContext)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    console.log(formData)
    return (
        <form onSubmit={(e) => {
            e.preventDefault();

            setTimeout(() => {
                setLoading(false)
                setConfirm(true)
                restTheCart()

            }, 1000)


        }}>
            <input placeholder='email *' required type='email' onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <input placeholder='password *' type='password' required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className='confirm-btn' style={{ backgroundColor: '#d0d0d0' }}>
                    <Link to='../'>cancel</Link>
                </button>
                <button className='confirm-btn' onClick={() => { formData.password && setLoading(true) }}>confirm</button>
            </div>

        </form>
    )
}
export default Form;