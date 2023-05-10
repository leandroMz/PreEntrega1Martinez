import 'bootstrap/dist/css/bootstrap.min.css';
import { Carrousel } from './Carrousel';
import ItemListContainer from '../ItemListContainer/ItemListContainer';


export const MainContain = () => {
  return (
    <div>
       <Carrousel/>


       <div>
        <section>
            <ul>
                <li>Enviamos tu compra</li>
                <li>Paga como quieras</li>
                <li>Compra con seguridad</li>
            </ul>
        </section>

        <section>
            <ul>
                <li> 
                    <img src="" alt="" />
                    Clasicos
                </li>
                <li>
                <img src="" alt="" />
                    Diseño
                </li>
                <li>
                <img src="" alt="" />
                    Accesorios
                </li>
            </ul>
        </section>

        <section className='seccionProductos' id='productos'>
            <h3>Algunos de nuestros modelos</h3>
            <ItemListContainer/>
        </section>
       </div>
    </div>


  )
}
