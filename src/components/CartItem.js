import React from "react"

//    Filled trash icon to use when hovering:
//    <i className="ri-delete-bin-fill"></i>

function CartItem({item}) {
  return (
    <div className="cart-item">
      <i className="ri-delete-bin-line"></i>
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  )
}

export default CartItem