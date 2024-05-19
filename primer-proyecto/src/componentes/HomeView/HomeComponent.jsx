import './HomeComponent.css'
import {getProducts} from '../../asyncMock';
import { useEffect, useState } from 'react';
import HomeCards from './HomeCards';
import NavBarProducts from '../navigation/NavBarProducts';
export default function HomeComponent({greeting}) {
   const [Products, setProducts]=useState([]);
   useEffect (()=>{
    getProducts.then(data => setProducts (data));
   },{})
   return (
    <>
    <div className='productos-tar'>
    <NavBarProducts />
    <article className='productos'>
        {
        Products.map(product => (<HomeCards imagen={product.imagen} titulo={product.titulo} precio={product.precio}/>) )
        }
    </article>
    </div>

    </>
    )
}