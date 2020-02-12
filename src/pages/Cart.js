import React from "react"

function Cart() {
    // `<number>.toLocaleString("en-US", {style: "currency", currency: "USD"})`
    return (
        <main className="cart-page">
            <h1>Check out</h1>
        
            <p className="total-cost">Total: </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart