import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList';
import { LoadingComponent } from '../Loading/LoadingComponent';
import { collection, getDocs, getFirestore, orderBy, query, where } from "firebase/firestore"

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { cid } = useParams()
  const dbFirestore = getFirestore()
  const queryCollection = collection(dbFirestore, "productos")
  useEffect(() => {
    if (!cid) {
      const queryCollectionOrder = query(queryCollection, orderBy('category', 'desc') )
      getDocs(queryCollectionOrder)
        .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    } else {
      const queryCollectionFiltered= query(queryCollection, where('category', '==', cid))
      getDocs(queryCollectionFiltered)
        .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [cid])
  const categoriesInfo = {
    Clasico: {
      title: 'Anteojos Clásicos',
      banner: '/banner1.png',
      description: 'Descubre nuestra selección de anteojos clásicos, con estilos atemporales que nunca pasan de moda.'
    },
    Diseño: {
      title: 'Anteojos de Diseño',
      banner: '/banner2.png',
      description: 'Explora nuestra colección de anteojos de diseño, cuidadosamente diseñados para resaltar tu estilo único.'
    },
    Accesorios: {
      title: 'Accesorios para Anteojos',
      banner: '/banner3.png',
      description: 'Encuentra los accesorios perfectos para tus anteojos, desde estuches elegantes hasta colgantes para realizar deporter de forma segura.'
    }
  };
  let title = '';
  let banner = '';
  let description = '';
  if (cid && categoriesInfo[cid]) {
    title = categoriesInfo[cid].title;
    banner = categoriesInfo[cid].banner;
    description = categoriesInfo[cid].description;
  }
  return (
    <div>
      {title && (
        <div className='titleCategorysProduct'>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      )}
      <div>
        {loading ? <LoadingComponent /> : <ItemList products={products} />}
      </div>
      {banner && <img className='imageBanner' src={banner} alt={title} />}
    </div>
  );
}