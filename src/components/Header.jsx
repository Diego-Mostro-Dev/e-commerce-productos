
import './Header.css';
import Cart from './Cart';
import Filters from '../components/Filters';


export default function Header({ changeFilters }) {
    return (
        <div className="header">
            <h1>E-commerce ✨</h1>
            <Filters onChange={changeFilters} />
            <Cart />
        </div>
    );
}


