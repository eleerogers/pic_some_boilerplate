// get photos from: 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'


import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const context = createContext();

function ContextProvider({ children }) {
  const [photos, setPhotos] = useState([])
  const [cart, setCart] = useState([])
  const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

  useEffect(() => {
    axios(url)
      .then(({data}) => {
        setPhotos(data);
      });
  }, [])

  function toggleFavorite(id) {
    setPhotos(currPics => {
      return currPics.map(pic => {
        return pic.id === id ? {...pic, isFavorited: !pic.isFavorited } : pic;
      })
    })
  }

  function addToCart(photo) {
    setCart(cart => [...cart, photo])
  }

  function removeFromCart(photo) {
    setCart(cart => (
      cart.filter(pic => pic.id !== photo.id)
    ))
  }

  function emptyCart() {
    setCart([]);
  }

  return (
    <context.Provider value={{ photos, toggleFavorite, addToCart, removeFromCart, cart, emptyCart }}>
      {children}
    </context.Provider>
  )

}

export { ContextProvider, context }