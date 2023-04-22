import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
const CartWidget = () => {
  const { cartQuantity } = useCart();
  return (
    <div>
      <FaShoppingCart size={'2rem'} color={'purple'} />
      <span>{cartQuantity() }</span>
    </div>
  );
};

export default CartWidget;