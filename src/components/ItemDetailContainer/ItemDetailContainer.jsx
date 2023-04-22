import React, { useEffect, useState } from 'react';
import { getProducts } from '../../Mock/FakeApi';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
const ItemDetailContainer = () => {
  const [detalleProducto, setDetalleProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    getProducts()
      .then((res) => setDetalleProducto(res.find((item) => item.id === id)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemDetail detalleProducto={detalleProducto} />
      )}
    </div>
  );
};

export default ItemDetailContainer;