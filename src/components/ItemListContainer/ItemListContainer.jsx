import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../Mock/FakeApi';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (id) {
          setListaProductos(res.filter((item) => item.category === id));
        } else {
          setListaProductos(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h2>
        {greeting}{' '}
        <span style={{ textTransform: 'capitalize', color: '#c737d7' }}>
          {id && id}
        </span>
      </h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemList listaProductos={listaProductos} />
      )}
    </div>
  );
};

export default ItemListContainer;
  