import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DomViw from './DomViw';
import CategoriaRecorrido from './componentes/Categorias/CategoriaRecorrido';
import CategoriaPlaya from './componentes/Categorias/CategoriaPlaya';
import CategoriaParques from './componentes/Categorias/CategoriaParques';
import CartWidget from './componentes/Carrito/CartWidget';
import Contactos from './componentes/Contactos/Contactos';



function App() {
  

  return (
    <>
    
<BrowserRouter>
   <Routes> 
          <Route exact path='/' element={<DomViw/>} /> 
          <Route exact path='/Nosotros' element={<CategoriaRecorrido/>} /> 
          <Route exact path='/Contac' element={<Contactos/>} />
          <Route exact path='/Carrito' element={< CartWidget/>} />
          <Route exact path='/Todos' element={<DomViw/>} /> 
          <Route exact path='/Recorridos' element={<CategoriaRecorrido/>} /> 
          <Route exact path='/Playas' element={<CategoriaPlaya />} />
          <Route exact path='/Parques' element={<CategoriaParques />} />
   </Routes>
</BrowserRouter>
  
    </>
  )
}

export default App
