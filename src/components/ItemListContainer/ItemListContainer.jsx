import React, { useEffect, useState } from 'react'
import { mFetch } from '../../util/mFetch'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Css/ItemList.css'
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';


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

    <div>
      {loading ?
        <h2>Cargando...</h2> :
        <ItemList products={products} />
        }
        
    </div>

  )
}

export default ItemListContainer