import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { FaUser } from 'react-icons/fa';
import logo from '../../assets/img/brand.png';
import { Link, NavLink, useParams } from 'react-router-dom';
import '../../Css/NavBar.css'
import { NavDropdown } from 'react-bootstrap';


const NavBar = () => {


    return (
        <div className='nav-bar'>
            <Link to='/'>
                <img src={logo} style={{ width: "150px" }} alt="" />
            </Link>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li>
                                <NavDropdown title="Anteojos" id="basic-nav-dropdown">
                                    <NavLink to="/category/Clasico">Clasicos</NavLink>
                                    <NavLink to="/category/Diseño">Diseño</NavLink>
                                </NavDropdown>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category/Accesorios">Accesorios</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ofertas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <ul>
                    <li>
                        <a href="">
                            <FaUser />
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

export default NavBar
