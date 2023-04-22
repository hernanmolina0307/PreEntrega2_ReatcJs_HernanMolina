import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useContext } from 'react'
// import { CartContext } from '../context/CartContext'
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  //forma larga de llamar context
  //  const{cart} = useContext(CartContext)
  const { cart, cartTotal, clear } = useCart();
  const navegar = useNavigate();
  console.log(cart);
  //Llamo al contexto para traer el array del carrito
  //Pregunto, si el carro no tiene items, muestro un mesaje amigable, de lo contrario hago un map
  return (
    <div>
      {!cart.length ? (
        <div>
          <h2>Tu carrito esta vacio!</h2>
          <h4>Te invitamos a ver nuestros productos</h4>
          <button className="btn btn-success" onClick={() => navegar('/')}>
            Ir a comprar
          </button>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2>Tu carrito</h2>
          {cart.map((compra) => (
            <CartItem key={compra.id} compra={compra} />
          ))}
          {/* Fuera del map, muestro el total a pagar, el boton de vaciar el carrito o terminar la compra */}
          <span>Total a pagar : ${cartTotal()}</span>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '2rem',
            }}
          >
            <button className="btn btn-danger" onClick={clear}>
              Vaciar Carrito
            </button>
            <button
              className="btn btn-success"
              onClick={() =>
                console.log(
                  'Aca vamos a llevar a otro componente que va a hacer  la logica de generar una orden'
                )
              }
            >
              Terminar compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;