import { Link, NavLink} from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';
import UserWidget from '../UserWidget/UserWidget';
import './NavBar.css'

export const NavBar = () => {
    return (
        <div className='nav-bar'>
            <Link to='/'>
                <img src="/brand.png" style={{ width: "150px" }} alt="" />
            </Link>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li>
                                <ul>
                                <NavDropdown title="Anteojos" id="basic-nav-dropdown">
                                    <li>
                                    <NavLink to="/category/Clasico">Clasicos</NavLink>
                                    </li>
                                    <li>
                                    <NavLink to="/category/Diseño">Diseño</NavLink>
                                    </li>
                                    <li>
                                    <NavLink to="#">Luz Azul</NavLink>
                                    </li>                                        
                                </NavDropdown>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category/Accesorios">Accesorios</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ofertas</a>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <ul>
                    <li>
                        <a href="#">
                            <UserWidget />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <CartWidget />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}