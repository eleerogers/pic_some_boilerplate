import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { context } from "../Context"
// Full class name to use WHEN ITEMS IN CART:
// "ri-shopping-cart-fill ri-fw ri-2x"
//
// Full class name to use WHEN CART IS EMPTY:
// "ri-shopping-cart-line ri-fw ri-2x"


function Header() {
    const { cart } = useContext(context)
    return (
        <header>
            <Link to="/photos">
                <h2>Pic Some</h2>
            </Link>
            <Link to="/cart">
                <i className={`ri-shopping-cart-${cart.length ? 'fill' : 'line'} ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}

export default Header;
