import React, { useEffect, useState } from 'react'
import { mFetch } from '../../util/mFetch'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Css/ItemList.css'
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import { collection, doc, getDoc, getFirestore, query } from "firebase/firestore"

const Loading = () => {
  return (
    <div>
      <h4>Cargando...</h4>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [producto, setProducto] = useState({})
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
    } else {
      mFetch()
        .then(result => {
          setProducts(result.filter(products => products.category === cid))
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }
  }, [cid])




  return (

    <div>
      {loading ?
        <Loading /> :
        <ItemList products={products} />
      }

    </div>

  )
}

export default ItemListContainer