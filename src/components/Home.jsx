import React, { useContext, useEffect, useState } from 'react';
import '../components/Home.css';
import Contexto from '../context/Contexto';
import Item from '../components/Item';
import Header from './Header';

export default function Home() {
    const { listameProductos, productos } = useContext(Contexto);

    useEffect(() => {
        listameProductos();
    }, []);

    const [filters, setFilters] = useState({
        categoria: 'all',
        precioMin: 0
    });

    const filtrarProductos = (producto) => {
        return (
            producto.price >= filters.precioMin &&
            (
                filters.categoria === 'all' ||
                producto.category === filters.categoria
            )
        );
    };

    const productosFiltrados = productos.filter(filtrarProductos);

    return (
        <>
            <Header changeFilters={setFilters} />
            <div className="wrapper-home">
                <div className="productos">
                    {productosFiltrados.map(item => (
                        <Item key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </>
    );
}
