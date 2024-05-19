const products = [
    {
       id: "1",
       titulo: "Ciudad",
       imagen:"./img/ciudadchile.jpg",
       categoria: "Recorridos",
       precio: 50000 ,
       descripcion: "Recorridos por las zonas mas representativas de la ciudad; acompañados de nuestros mejores guias."
    },
    {
       id: "2",
       titulo: "Museos",
       imagen:"./img/museoschile.jpg",
       categoria:"Recorridos",
       precio: 50000,
       descripcion: "Recorridos por los museos de arte e historia de la ciudad; acompañados de nuestros mejores guias."
    },
    {
       id: "3",
       titulo: "Lugares historicos",
       imagen:"./img/parquemonumentalchile.jpg",
       categoria:"Recorridos",
       precio: 50000,
       descripcion: "Recorridos por las plazas mas emblematicas de la ciudad; acompañados de nuestros mejores guias."
    },
  
    {
       id: "4",
       titulo: "Playa Reñaca",
       imagen:"./img/playaschile.jpg",
       categoria: "Playas",
       precio: 50000,
       descripcion: "Visitaremos Reñaca, una de las playas mas iconicas de valparaiso, donde podras disfrutar del sol y la gastronomia; acompañados de nuestros mejores guias."
    },
    {
       id: "5",
       titulo: "Playa Papudo",
       imagen:"./img/playapapudo.jpg",
       categoria:"Playas",
       precio: 50000, 
       descripcion:"Visitaremos Papudo, una de las playas mas iconicas de valparaiso, donde podras disfrutar del sol y la gastronomia; acompañados de nuestros mejores guias."
    },
    {
       id: "6",
       titulo: "Playa Zapallar",
       imagen:"./img/playazapallar.jpg",
       categoria: "Playas",
       precio: 50000,
       descripcion:"Visitaremos Zapallar, una de las playas mas iconicas de valparaiso, donde podras disfrutar del sol y la gastronomia; acompañados de nuestros mejores guias."
    },
    {
       id: "7",
       titulo: "Parques Naturales",
       imagen:"./img/jardinjaponeschile.jpg",
       categoria: "Parques",
       precio: 50000,
       descripcion:"Visitaremos los parques naturales mas iconicos de la ciudad para disfrutar del verde de la naturaleza; acompañados de nuestros mejores guias."
    },
    {
       id: "8",
       titulo: "Parques Acuaticos",
       imagen:"./img/parqueacuaticochile.webp",
       categoria: "Parques",
       precio: 50000,
       descripcion:"Visitaremos los parques acuaticos mas iconicos, donde disfrutaremos del sol, las piscinas y toboganes del lugar; acompañados de nuestros mejores guias."
    },

    {
       id: "9",
       titulo: "Atracciones y Videojuegos",
       imagen:"./img/parquediversioneschile.jpg",
       categoria: "parques",
       precio: 50000,
       descripcion:"Visitaremos los parques de diversiones para disfrutar de sus atracciones y de la sala de videojuegos mas innovadora de la ciudad; acompañados de nuestros mejores guias."
        
    },
    
 ];

 export const getProducts = new Promise((resolve) => { 
    setTimeout (() => {
    resolve(products);
}, 2000);
 });
 
 export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
 };