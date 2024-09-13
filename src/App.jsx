import React, { useState } from 'react';
import ProductCard from './Components/ProductCard'

const productos = [
  { id: 1, nombre: 'Camiseta Colombia', precio: 20, imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dd3211ccf3b8485091d5825e4b2bc913_9366/Camiseta_Local_Seleccion_Colombia_24_Version_Jugador_Amarillo_IP8280_21_model.jpg' },
  { id: 2, nombre: 'Camiseta Argentina', precio: 20, imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/05596cc5f7724da8946f5362652319d0_9366/Camiseta_Local_Seleccion_Argentina_24_Blanco_IP8409_21_model.jpg' },
  { id: 3, nombre: 'Camiseta Deportiva', precio: 20, imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5ee24b019f8640e886ffd3e19a6f2fc8_9366/Camiseta_de_Entrenamiento_Power_Rosa_IX9092_HM1.jpg' },
  { id: 4, nombre: 'postre de limon', precio: 15, imagen: 'https://www.sopasypostres.com.co/wp-content/uploads/2023/05/Postre-de-Limon-scaled.jpg'},
  { id: 5, nombre: 'mouse gaming', precio: 100, imagen: 'https://nitrosystems.com.co/wp-content/uploads/2023/06/dgdfg-scaled.jpg'},
  { id: 6, nombre: 'teclado mecanico', precio: 600, imagen: 'https://d34vmoxq6ylzee.cloudfront.net/magefan_blog/teclados_mecanicos_para_computadora.jpg'},

];

const TiendaVirtual = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

    
  const vaciarCarrito = () => {
    setCarrito([]);
  };
  const eliminarproductocarrito = (productoid) => {
    const index = carrito.findIndex(item=> item.id === productoid);
    if (index !== -1) {
      const nuevocarrito= [...carrito]
      nuevocarrito.splice(index, 1);
      setCarrito(nuevocarrito);
    }}
    const filter = productos.filter((producto)=> producto.nombre.toLowerCase().includes(buscar.toLowerCase()))

  return (
    <div className="container">
      <h1>Mi Tienda Virtual</h1>
      <input type="text" onchange={(e)=>setbuscar(e.target.value)}/>
      
      <div className="productos-grid">
        {filter.length>0? filter.map((producto) => (
          <ProductCard 
            key={producto.id} 
            producto={producto} 
            onAgregarAlCarrito={agregarAlCarrito}
          />
        ))}
      </div>
      
      <div className="carrito">
        <h2>Carrito</h2>
        <div className="boton-agregar">
          <p>{carrito.length} artículos</p>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>

        </div>
        <ul className="mt-2">
          {carrito.map((item, index) => (
            <div key={index} className="carrito-item ">
              <img 
                src={item.imagen} 
                alt={item.nombre} 
                className="carrito-item-imagen"
              />
              <span>{item.nombre} - ${item.precio}</span>
              <button onClick={() => eliminarproductocarrito(item.id)}>Eliminar</button>
            </div>
          ))}
        </ul>
        <p className="carrito-total">
          Total: ${carrito.reduce((sum, item) => sum + item.precio, 0)}
        </p>
      </div>
    </div>
  );
};

export default TiendaVirtual;
