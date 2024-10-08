import React from 'react'
import '../components/ItemCarrito.css'
import { CloseIcon } from './Icons/Icons.jsx';


export default function ItemCarrito(props) {
    const { id, title, eliminarCarrito, price, image, cantidad, categoria, incrementarCantidad, elimiminarItemCarrito } = props
    console.log(image, "url de la imagen que llega a itemcarrito")
    console.log(title, " name que llega a itemcarrito")
    return (
        <>
            <div className="wrapper">
                <button className='close-button' onClick={() => elimiminarItemCarrito(id)}><CloseIcon /></button>
                <img src={image} alt={title} width={100} height={100} />
                <div>
                    <h1>Nombre: {title}</h1>
                </div>
                <div><h1>Precio: ${price}</h1></div>
                <div><h1>Categoria: {categoria}</h1></div>
                <div><h1>Cantidad: {cantidad}</h1></div>
                <button onClick={() => incrementarCantidad(id)}>+</button>
                <button onClick={() => eliminarCarrito(id)}>--</button>
            </div>

        </>
    )
}
