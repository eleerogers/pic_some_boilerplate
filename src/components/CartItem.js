import React, {useContext} from "react"
import useHover from "../hooks/useHover"
import {context} from "../Context"
//    Filled trash icon to use when hovering:
//    <i className="ri-delete-bin-fill"></i>

function CartItem({item}) {
  const [hover, ref] = useHover()
  const {removeFromCart} = useContext(context)
  return (
    <div className="cart-item">
      {
        hover
          ? <i ref={ref} onClick={() => removeFromCart(item)} className="ri-delete-bin-fill"></i>
          : <i ref={ref} className="ri-delete-bin-line"></i>
      }
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  )
}

export default CartItem