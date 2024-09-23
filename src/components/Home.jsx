import React, { useContext, useEffect } from 'react';
import '../components/Home.css';
import Contexto from '../context/Contexto';
import Item from '../components/Item';
import Header from './Header';

export default function Home() {
    const { listameProductos, productos } = useContext(Contexto);

    useEffect(() => {
        listameProductos();
    }, []);

    return (
        <div className="wrapper-home">
            <div className="productos">
                {productos.map(item => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
            <Header />
        </div>
    );
}
