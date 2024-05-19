import './HomeComponent.css'

export default function HomeCards({titulo, precio, imagen}) {
    return<>
    
    <div className='tarjeta-prod'>
       <img className='producto-imagen' src={imagen} alt={titulo} />
       <div className='producto-detalle'>
       <h2>{titulo}</h2>
       <p>Precio $ {precio}</p>
       <div className='boton-prod'>
       <button class="boton-agregar">agregar</button>
       <button class="boton-detalle">detalle</button>
    </div>
     </div>
     </div>
    
    
    
    
    
    </>
}