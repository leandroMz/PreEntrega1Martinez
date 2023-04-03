import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { FaUser } from 'react-icons/fa';
import logo from '../../assets/img/brand.png';
import '../../Css/NavBar.css'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <img src={logo} style={{ width: "150px" }} alt="" />

            <nav>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Categorias</a>

                    </li>
                    <li>
                        <a href="">Ofertas</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                </ul>
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
