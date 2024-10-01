import React from 'react'
import '../components/ItemCarrito.css'


export default function ItemCarrito(props) {
    const { id, name, eliminarCarrito, price, image_url, cantidad, incrementarCantidad } = props
    console.log(image_url, "url de la imagen que llega a itemcarrito")
    console.log(name, " name que llega a itemcarrito")
    return (
        <>
            <div className="wrapper">
                <img src={image_url} alt={name} width={100} height={100} />
                <div>
                    <h1>Nombre: {name}</h1>
                </div>
                <div><h1>Precio:{price}</h1></div>
                <div><h1>Cantidad: {cantidad}</h1></div>
                <button onClick={() => incrementarCantidad(id)}>+</button>
                <button onClick={() => eliminarCarrito(id)}>Eliminar</button>

            </div>

        </>
    )
}
