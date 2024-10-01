import { useContext } from 'react';
import ItemCarrito from './ItemCarrito';
import './Header.css';
import Contexto from '../context/Contexto';
import Carrito from '../assets/static/shopping-cart.svg';
import CarritoVacio from '../assets/static/shopping-cart-x.svg';

export default function Header() {
    const { eliminarCarrito, vaciarCarrito, carrito, incrementarCantidad } = useContext(Contexto);

    // Calcular el total de precios y la cantidad total de productos       sssss
    const totalPrecio = carrito.reduce((total, item) => total + item.price * item.cantidad, 0);
    const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);


    return (
        <div className="header">
            <div className="wraper-carrito">
                <h1>Carrito de compras</h1>
                <div className="carritoCarrito">
                    <img src={Carrito} alt="Carrito" className='carritoCarrito' />
                    <div className={cantidadTotal === 0 ? 'carritoVacio' : 'carritoCant'}>
                        {cantidadTotal}
                    </div>
                </div>
            </div>
            <div className="totales">
                <h2>Total: ${totalPrecio.toFixed(2)}</h2>
            </div>
            <button>
                <h3>Ir a pagar</h3>
                ${totalPrecio.toFixed(2)}
            </button>
            {cantidadTotal > 0 && (
                <button className="borrar-carrito" onClick={vaciarCarrito}>
                    <img src={CarritoVacio} alt="Vaciar Carrito" />
                </button>
            )}

            <div className='carrito'>
                {carrito.map(item => (
                    <ItemCarrito
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image_url={item.image_url}
                        cantidad={item.cantidad}
                        eliminarCarrito={eliminarCarrito}
                        incrementarCantidad={incrementarCantidad}
                    />
                ))}
            </div>

        </div>
    );
}
