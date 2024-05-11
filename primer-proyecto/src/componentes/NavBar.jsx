
import './NavBar.css';
import CartWidget from './CartWidget';
import ButtonComponent from './ButtonComponent';


export default function NavBar() {
    return (
    <header className='menuList'>
    <h1>Carlos Store</h1>
    <nav className="barra">
     <ButtonComponent nombre='Quienes Somos' />
     <ButtonComponent nombre='Servicios' />
     <ButtonComponent nombre='Galeria' />
     <ButtonComponent nombre='Contactos' />

    </nav>
    <CartWidget />
    
    </header>
    )
}