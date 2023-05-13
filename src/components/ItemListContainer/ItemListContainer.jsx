import React, { useEffect, useState } from 'react'
import { mFetch } from '../../util/mFetch'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList';
import { LoadingComponent } from '../Loading/LoadingComponent';
// import { collection, doc, getDoc, getFirestore, query } from "firebase/firestore"

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  // const [producto, setProducto] = useState({})
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
        <LoadingComponent/>
        :
        <ItemList products={products} />
      }
    </div>
  )
}