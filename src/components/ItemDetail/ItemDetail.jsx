import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
const ItemDetail = ({ detalleProducto }) => {
  const { name, description, price, stock, img } = detalleProducto;
  const { addItem } = useCart();
  const [compra, setCompra] = useState(false);
  //Llamo unicamente a la funcion que va a agregar un item al carrito, le paso la infomacion del producto y la cantidad.
  //La cantidad viene por eventos del componente hijo, el contador.
  const onAdd = (cantidad) => {
    addItem(detalleProducto, cantidad);
    setCompra(true);
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem',
      }}
    >
      <h2>Detalle de: {name}</h2>
      <img src={img} alt={name} style={{ width: '25rem' }} />
      <p>{description}</p>
      <p>${price}</p>
      {compra ? (
        <Link className="btn btn-dark" to={'/cart'}>
          Ir al carrito
        </Link>
      ) : (
        <ItemCount initial={1} stock={stock} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
