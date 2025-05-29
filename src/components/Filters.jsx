import React, { useState } from 'react';

export default function Filters({ onChange }) {
    const [minPrice, setMinPrice] = useState(0);
    const [categoria, setCategoria] = useState('all');

    const handleMinPriceChange = (event) => {
        const nuevoPrecio = Number(event.target.value);
        setMinPrice(nuevoPrecio);
        onChange(prevState => ({
            ...prevState,
            precioMin: nuevoPrecio
        }));
    };

    const handleCategoriaChange = (event) => {
        const nuevaCategoria = event.target.value;
        setCategoria(nuevaCategoria);
        onChange(prevState => ({
            ...prevState,
            categoria: nuevaCategoria
        }));
    };

    return (
        <section className="filters">
            <div className="filters--price">
                <label htmlFor="price">Precio: </label>
                <input
                    type="range"
                    id="price"
                    name="price"
                    min="0"
                    max="1000"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                />
                <span>${minPrice}</span>
            </div>

            <div className="filters--category">
                <label htmlFor="category">Categoría: </label>
                <select
                    id="category"
                    name="category"
                    value={categoria}
                    onChange={handleCategoriaChange}
                >
                    <option value="all">Todo</option>
                    <option value="electronics">Electrónica</option>
                    <option value="jewelery">Joyería</option>
                    <option value="men's clothing">Ropa de varón</option>
                    <option value="women's clothing">Ropa de mujer</option>
                </select>
            </div>
        </section>
    );
}
