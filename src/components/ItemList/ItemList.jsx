import { Item } from '../Item/Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemList.css'

export const ItemList = ({ products }) => {
  return (
    <>
      <h3>Algunos de nuestros modelos</h3>
      <div className='orderItems'>
        {products.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}; 