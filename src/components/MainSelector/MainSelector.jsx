import { Link } from 'react-router-dom'
import './MainSelector.css'
export const MainSelector = () => {
    return (
        <>
            <div className='boxMainSelector'>
                <div class="text-success">
                    <hr />
                </div>
                <div className="container">
                    <Link to="/category/Clasicos" className="box">
                        <img src="./cs.PNG" alt="First image" />
                        <div className="text textOne">
                            <h2>
                                Clásicos
                            </h2>
                        </div>
                    </Link>
                    <Link to="/category/Diseño" className="box">
                        <img src="./ds.jpg" alt="Second image" />
                        <div className="text textTwo">
                            <h2>
                                Diseño
                            </h2>
                        </div>
                    </Link>
                    <Link to="/category/Accesorios" className="box">
                        <img src="./as.png" alt="Third image" />
                        <div className="text textThree">
                            <h2>
                                Accesorios
                            </h2>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}