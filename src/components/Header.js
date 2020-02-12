import React from "react"

// Full class name to use WHEN ITEMS IN CART:
// "ri-shopping-cart-fill ri-fw ri-2x"
//
// Full class name to use WHEN CART IS EMPTY:
// "ri-shopping-cart-line ri-fw ri-2x"


function Header() {
    return (
        <header>
            <h2>Pic Some</h2>
            <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        </header>
    )
}

export default Header;
