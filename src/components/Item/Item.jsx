import React from 'react';
import { useNavigate } from 'react-router-dom';
const Item = ({ producto }) => {
  const { id, img, name, description, price, stock, hashtags } = producto;
  const navegar = useNavigate();
  return (
    <div className="card" style={{ width: '20rem', margin: '.5rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <p className="card-text">stock: {stock}</p>
        {hashtags?.map((frase, index) => (
          <p className="card-text" key={index}>
            {frase}
          </p>
        ))}
        {/* safe navigation operator, en JS Optional chaining o encadenamiento opcional ,
         les dejo el link de la docu: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
      </div>

      <button
        className="btn btn-primary"
        onClick={() => navegar(`/item/${id}`)}
      >
        Ver más
      </button>
    </div>
  );
};

export default Item;
