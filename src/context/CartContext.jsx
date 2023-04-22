import React, { createContext, useContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //FUNCION CON ITEM Y QUANTITY
  //pasar item y contador
  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) => {
          if (prod.id === item.id) {
            return { ...prod, quantity: prod.quantity + cantidad };
          } else {
            return prod;
          }
        })
      );
    } else {
      setCart([...cart, { ...item, quantity: cantidad }]);
    }
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
  };

  const cartTotal = () => {
    return cart.reduce((acc, prod) => (acc += prod.price * prod.quantity), 0);
  };
  const removeItem2 = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    cart.splice(index, 1);
    setCart([...cart]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        clear,
        removeItem,
        isInCart,
        addItem,
        cartQuantity,
        cartTotal,
        removeItem2,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//Un mini custom hook, para no tener que importar el contexto y el hook en todos los componentes
export const useCart = () => useContext(CartContext);
