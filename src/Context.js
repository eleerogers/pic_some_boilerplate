// get photos from: 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'


import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const context = createContext();

function ContextProvider({ children }) {
  const [photos, setPhotos] = useState([])
  const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

  useEffect(() => {
    axios(url)
      .then(({data}) => {
        setPhotos(data);
      });
  }, [])

  return (
    <context.Provider value={{ photos }}>
      {children}
    </context.Provider>
  )

}

export { ContextProvider, context }