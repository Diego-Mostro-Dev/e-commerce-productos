import React, { useContext, useEffect } from 'react';
import '../components/Home.css';
import Contexto from '../context/Contexto';
import Item from '../components/Item';
import Header from './Header';


export default function Home() {
    const { listameProductos, productos } = useContext(Contexto);
    console.log(productos, 'esto es desde para ver que productos llegan aca');

    useEffect(() => {
        listameProductos();
    }, []);

    return (
        <>
            <Header />
            <div className="wrapper-home">
                <div className="productos">
                    {productos.map(item => (
                        <Item key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </>
    );
}
