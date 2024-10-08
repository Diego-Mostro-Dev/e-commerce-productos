import { ClearCartIcon, CartIcon } from './Icons/Icons.jsx'
import { useContext } from 'react';
import './Cart.css'
import ItemCarrito from './ItemCarrito';
import Contexto from '../context/Contexto';





export default function Cart() {
    const { eliminarCarrito, vaciarCarrito, carrito, incrementarCantidad, elimiminarItemCarrito } = useContext(Contexto);

    // Calcular el total de precios y la cantidad total de productos       sssss
    const totalPrecio = carrito.reduce((total, item) => total + item.price * item.cantidad, 0);
    const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);


    return (
        <>
            <label className="cart-button" htmlFor="checkbox">
                <CartIcon />
                <small className={cantidadTotal === 0 ? 'cart-cero' : 'cart-cant'}>{cantidadTotal}</small>
            </label>
            <input type="checkbox" id="checkbox" className="cart-checkbox" hidden />

            <aside className="cart">
                <h1>Carrito de compras</h1>
                <div >
                    <h2>Total: ${totalPrecio.toFixed(2)}</h2>
                </div>
                <div className="carrito-botones">
                    <button>
                        <h3>Ir a pagar</h3>
                        ${totalPrecio.toFixed(2)}
                    </button>
                    <button onClick={vaciarCarrito}>
                        <ClearCartIcon />
                    </button>
                </div>
                {carrito.map(item => (
                    <ItemCarrito
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        cantidad={item.cantidad}
                        categoria={item.category}
                        eliminarCarrito={eliminarCarrito}
                        incrementarCantidad={incrementarCantidad}
                        elimiminarItemCarrito={elimiminarItemCarrito}
                    />
                ))}
            </aside>
        </>
    )
}
