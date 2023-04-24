import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const {pid} = useParams()
  return (
    <div>
        {pid}
        <ItemDetail/>
    </div>
  )
}

export default ItemDetailContainer