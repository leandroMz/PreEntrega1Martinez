import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore"

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const { pid } = useParams()

  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryDoc = doc(dbFirestore, 'productos', pid)
    getDoc(queryDoc)
      .then(resp => setProduct({ id: resp.id, ...resp.data() }))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [pid])

return (
  <div className="orderItemDetail">
    {isLoading ?
      <div className="no-stock-message">
        <h2 className="loadDetail">Cargando</h2>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      :
      <div>
        <ItemDetail product={product} />
      </div>
    }
  </div>
)
}