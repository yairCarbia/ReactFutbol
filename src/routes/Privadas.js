import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import Carrito from '../components/cart/Carrito';
import Nosotros from '../components/Nosotros/Nosotros'
import Contacto from '../components/Contacto/Contacto'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer';
import { CartProvider } from '../context/CarContext';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { CarContext } from '../context/CarContext';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
const Privadas = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/tienda' element={<ItemListContainer />} />
                <Route path='/categorias/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path="/cart" element={<Carrito />} />
                <Route path='/*' element={<ItemListContainer />} />

            </Routes>

            <Footer />
        </>
    )
}

export default Privadas