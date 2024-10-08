
import './Header.css';
import Cart from './Cart';

export default function Header() {

    return (
        <>
            <div className="header">
                <h1>Carrito de compras</h1>
                <Cart />
            </div>

        </>
    );
}