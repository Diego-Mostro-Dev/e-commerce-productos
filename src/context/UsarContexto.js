import React, { useReducer, useEffect } from 'react';
import Contexto from './Contexto';
import Reducer from '../reducer/Reducer';

export default function UsarContexto(props) {
    const { children } = props;

    const estadoInicial = {
        productos: [],
        carrito: JSON.parse(localStorage.getItem('carrito')) || []
    };

    const [state, dispatch] = useReducer(Reducer, estadoInicial);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(state.carrito));
    }, [state.carrito]);

    const listameProductos = async () => {
        try {
            const productos = await fetch('https://fakestoreapi.com/products')
                .then(res => res.json());
            console.log("Productos obtenidos:", productos);
            dispatch({ type: "LISTAME_PRODUCTOS", payload: productos });
        } catch (error) {
            console.error("Error al cargar los productos:", error);
        }
    };

    const agregarACarrito = (props) => {
        dispatch({ type: "AGREGAR_CARRITO", payload: props });
    };

    const eliminarCarrito = (id) => {
        dispatch({ type: "ELIMINAR_CARRITO", payload: id });
    };

    const vaciarCarrito = () => {
        dispatch({ type: 'VACIAR_CARRITO' });
    };

    const incrementarCantidad = (id) => {
        dispatch({ type: 'INCREMENTAR_CANTIDAD', payload: id });
    };
    console.log(state.productos, 'esto es el state');
    return (
        <Contexto.Provider
            value={{
                listameProductos,
                agregarACarrito,
                eliminarCarrito,
                vaciarCarrito,
                incrementarCantidad,
                productos: state.productos,
                carrito: state.carrito
            }}
        >
            {children}
        </Contexto.Provider>
    );
}
