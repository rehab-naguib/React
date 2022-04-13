import './Nav.css'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark ">
            <ul className='d-flex '>

                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/todo">Todo List</Link></li>
            </ul>
        </nav>
    );
}
export default Nav;
