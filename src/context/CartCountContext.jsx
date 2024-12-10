import React, { createContext, useState } from 'react';

const CartCountContext = createContext(0);

const CartCountProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  return (
    <CartCountContext.Provider value={{ cartCount, setCartCount, cart, setCart }}>
      {children}
    </CartCountContext.Provider>
  );
};

export { CartCountContext, CartCountProvider };
