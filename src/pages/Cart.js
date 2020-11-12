import React, {useContext, useState} from "react"
import CartItem from "../components/CartItem"
import {context} from "../Context"

function Cart() {
    const { cart, emptyCart } = useContext(context)
    const [ btnText, setBtnText ] = useState('Place Order')
    const totalCostNum = cart.length * 5.99
    const formattedPrice = totalCostNum.toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder(photo) {
        setBtnText('Ordering...')
        setTimeout(() => {
            console.log(`You have been charged ${formattedPrice}`)
            emptyCart()
            setBtnText('Place Order')
        }, 2500)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {
                cart.map(item => <CartItem key={item.id} item={item} />)
            }
            {
                cart.length
                    ? <p className="total-cost">Total: {formattedPrice}</p>
                    : <p>No items in cart.</p>
            }       
            <div className="order-button">
                <button onClick={placeOrder} disabled={!cart.length}>{btnText}</button>
            </div>
        </main>
    )
}

export default Cart