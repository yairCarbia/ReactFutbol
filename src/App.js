import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { Navbar } from './components/Navbar/Navbar'
import Carrito from './components/Cart/Carrito';


import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CarContext';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CarContext } from './context/CarContext';
import { useState } from 'react';
import LoginScreen from './components/LoginScreen/LoginScreen';
import { AuthContextProvider } from './context/AuthContext';
import AppRouter from './routes/AppRouter';

function App() {
  //proveedor del contexto ,debe ser definido 
  // const [carrito, setCarrito] = useState([]);
  // const addItem = item => {
  //   setCarrito([...carrito, item])
  // }
  // const estaEnCarrito = (id) => {
  //   return carrito.some((prod) => prod.id === id)
  // }

  // const totalidad = () => {
  //   return carrito.reduce((acc, prod) => acc += (prod.precio * prod.cantidad), 0)
  // }
  // const totalCantidad = () => {
  //   return carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
  // }
  // const vaciarCarrito = () => {
  //   return setCarrito([]);
  // }
  return (


    <AuthContextProvider>
      <CartProvider>
        <AppRouter />

      </CartProvider>
    </AuthContextProvider>
  );
}

export default App;

{/* <Route path='/users' element={ <Users/> }>
  <Route path='/login' element={<Login/>}/>
</Route> */}
