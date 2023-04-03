import React from 'react'
import '../../Css/ItemList.css'


const ItemListContainer = ( {greeting} ) => {
  return (
    <div className='saludo'>
        {greeting}
    </div>
  )
}

export default ItemListContainer