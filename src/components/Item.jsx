import React, { useState, useContext, useEffect } from 'react';
import Contexto from '../context/Contexto';
import '../components/Item.css';
import CarritoSumar from '../assets/static/shopping-cart-plus.svg';
import CarritoEliminar from '../assets/static/shopping-cart-x.svg';

export default function Item(props) {
    const { id, title, description, price, image_url, category } = props;
    const { agregarACarrito, eliminarCarrito, carrito } = useContext(Contexto);

    const [enCarrito, setEnCarrito] = useState(false);

    useEffect(() => {
        const productoEnCarrito = carrito.some(item => item.id === id);
        setEnCarrito(productoEnCarrito);
    }, [carrito, id]);

    const manejarClick = () => {
        if (enCarrito) {
            eliminarCarrito(id);
        } else {
            agregarACarrito(props);
        }
        setEnCarrito(!enCarrito); // Alternar el estado
    };

    return (
        <div className='item'>
            <img className='item-img' src={image_url} alt={title} width={100} height={100} />
            <div><h1>Precio: ${price}</h1></div>
            <div><h2>Nombre: {title}</h2></div>
            <div><h2>Categoria: {category}</h2></div>
            <div><h2>Descripción: {description}</h2></div>
            <button
                onClick={manejarClick}
                className={enCarrito ? 'carrito-restar' : 'carrito-sumar'}
            >
                {enCarrito ?
                    <img src={CarritoEliminar} alt="Eliminar" /> :
                    <img src={CarritoSumar} alt="Agregar" />}
            </button>
        </div>
    );
}
