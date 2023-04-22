import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ErrorPage from './components/Error/ErrorPage';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
export default function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Listado de todos los productos" />
            }
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer greeting="Listado de categoria:" />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

