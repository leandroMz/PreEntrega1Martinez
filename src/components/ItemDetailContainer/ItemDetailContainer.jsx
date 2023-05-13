import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { mFetch } from "../../util/mFetch"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const { pid } = useParams()

  useEffect(() => {
    if (!pid) {
      mFetch()
        .then(result => {
          setProduct(result)
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
    } else {
      mFetch()
        .then(result => {
          setProduct(result.filter(product => product.id === pid)[0])
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
    }
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