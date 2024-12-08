import React, { createContext, useState } from 'react';

const CartCountContext = createContext(0);

const CartCountProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  return (
    <CartCountContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartCountContext.Provider>
  );
};

export { CartCountContext, CartCountProvider };
