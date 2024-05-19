import './NavBar.css';
import ButtonComponent from '../Botones/ButtonComponent';
import CartWidget from '../Carrito/CartWidget';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
    <header className='menu-list'>
    <h1 className='logo'>Carlos Store</h1>
    <nav className="barra">
     <ButtonComponent nombre='Home'>
     <Link to={'/'} ></Link>
     </ButtonComponent>
     <ButtonComponent nombre='Nosotros' >
        <Link to={'/Nosotros'} ></Link>
     </ButtonComponent>
     <ButtonComponent nombre='Contact' >
        <Link to={'/Contac'} ></Link> 
     </ButtonComponent>
     <CartWidget >
        <Link to={'/Carrito'}></Link>
     </CartWidget>
        
    </nav>
    <footer>
    <p class="texto-footer">© 2024 CJSantos</p>
    </footer>
    </header>
    )
}