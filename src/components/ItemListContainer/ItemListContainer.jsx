import React, { useEffect, useState } from 'react'
import { mFetch } from '../../util/mFetch'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Css/ItemList.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { cid } = useParams()

  useEffect(() => {
    if (!cid) {
      mFetch()
        .then(result => {
          setProducts(result)
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))      
    }else{
      mFetch()
        .then(result => {
          setProducts(result.filter(products => products.category === cid) )
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }
  }, [cid])

console.log(cid);
  return (

    <div className='orderItems'>
      {loading ?
        <h2>Cargando...</h2> :
        products.map(({ id, picture, name, category, price, stock }) =>
          
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
                <div className='orderAdd'>
                  <ItemCount initial={0} stock={stock} onAdd={(quantity) => console.log("se agrego", quantity)} />
                </div>
              </div>
            
          
        )}
    </div>

  )
}

export default ItemListContainer