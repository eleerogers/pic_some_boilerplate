import React, { useContext } from "react"
import useHover from "../hooks/useHover"
import { context } from "../Context"

function Image({photo, className}) {
    const [hover, hoverRef] = useHover()
    const { toggleFavorite, addToCart, removeFromCart, cart } = useContext(context)

    function heartIcon() {
        return photo.isFavorited
            ? <i className="ri-heart-fill favorite" onClick={(e) => {toggleFavorite(photo.id)}}></i>
            : hover && <i className="ri-heart-line favorite" onClick={(e) => {toggleFavorite(photo.id)}}></i>
    }

    function cartIcon() {
        return cart.some(pic => pic.id === photo.id)
            ? <i onClick={() => removeFromCart(photo)} className="ri-shopping-cart-fill cart"></i>
            : hover && <i onClick={() => addToCart(photo)} className="ri-add-circle-line cart"></i>
    }

    return (
        <div ref={hoverRef} className={`${className} image-container`}>
            {
                
                //1. Icons to render for the heart:
                //<i className="ri-heart-line favorite"></i>
                //<i className="ri-heart-fill favorite"></i>
                //
                //2. Icon to render for the plus:
                //<i className="ri-add-circle-line cart"></i>
                //Icon to use when item already in cart:
                //<i className="ri-shopping-cart-fill cart"></i>
                
                // img needs src
            }
            <img src={photo.url} className="image-grid" alt="" />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

export default Image