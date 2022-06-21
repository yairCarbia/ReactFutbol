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
import Privadas from './Privadas';
import Publicas from './Publicas';
const AppRouter = () => {
    const { auth } = useAuthContext()


    return (
        <div>
            <BrowserRouter>



                {
                    auth.logIn ? <Privadas /> : <Publicas />
                }


            </BrowserRouter>
        </div>
    )
}

export default AppRouter