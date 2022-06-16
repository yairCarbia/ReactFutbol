import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { Navbar } from './components/Navbar/Navbar'
import Carrito from './components/cart/Carrito';
import Nosotros from './components/Nosotros/Nosotros'
import Contacto from './components/Contacto/Contacto'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/Footer/Footer';

import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CarContext } from './context/CarContext';
import { useState } from 'react';

function App() {
  //proveedor del contexto ,debe ser definido 
  const [carrito, setCarrito] = useState([]);
  const addItem = item => {
    setCarrito([...carrito, item])
  }
  const estaEnCarrito = (id) => {
    return carrito.some((prod) => prod.id === id)
  }

  return (
    <CarContext.Provider value={{ carrito, addItem, estaEnCarrito }}>




      <BrowserRouter>


        {/* <Routes>
            <Route path='/login' element={<Navbar/>}/>
            <Route path='*' element={<Navbar2/>}/>
          </Routes>           */}
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
      </BrowserRouter>
    </CarContext.Provider>
  );
}

export default App;

{/* <Route path='/users' element={ <Users/> }>
  <Route path='/login' element={<Login/>}/>
</Route> */}
