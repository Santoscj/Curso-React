import { Link } from 'react-router-dom';

export default function NavBarProducts() {
    return (
    <>
    
    <section className='menu-listt'>
    <h2 className='titulo-prod'>Categorias</h2>
    <button className='cursorP'> <Link to={'/'} >Todos</Link></button>
    <button className='cursorP'> <Link to={'/Recorridos'} >Recorridos</Link></button>
    <button className='cursorP'> <Link to={'/Playas'} >Playas</Link></button>
    <button className='cursorP'> <Link to={'/Parques'}>Parques</Link></button>
    </section>

    
    
    </>
    )
}