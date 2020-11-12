import React from "react"

function Image({photo, className}) {
    return (
        <div className={`${className} image-container`}>
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
        </div>
    )
}

export default Image