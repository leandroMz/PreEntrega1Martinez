import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Css/ItemList.css'

export const ItemList = ({ products }) => {
    return (
        <div className='orderItems'>            
            { products.map(({ id, picture, name, category, price, stock }) =>          
            <div key={id} className={`card ${category}`}>
                <Link to={`/detail/${id}`}>
                  <img src={picture} className="card-img-top " alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{name} - {category}</h5>
                    <p className="card-text">$ {price}</p>
                  </div>
                </Link>
                <div className="card-footer">
                  <small className="text-muted">

                    {stock === 0 ? "Sin stock" :
                      stock < 5 ? "Consultar stock" :
                        stock < 10 ? "Quedan pocas unidades" :
                          "Disponible"
                    }

                  </small>
                </div>
                {/* <div className='orderAdd'>
                  <ItemCount initial={0} stock={stock} onAdd={(quantity) => console.log("se agrego", quantity)} />
                </div> */}
              </div>
            
          
        )}
        </div>
    )
}