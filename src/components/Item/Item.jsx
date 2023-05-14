import { Link } from "react-router-dom";
import './Item.css'

export const Item = ({ id, picture, name, category, price, stock }) => {
    return (
      <div key={id} className={`card`}>
        <Link to={`/detail/${id}`}>
          <img src={picture} className="card-img-top" alt="" />
          <div className="card-body">
            <hr />
            <p className="card-text">$ {price}</p>
            <h5 className="card-title">{name} - {category}</h5>
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
      </div>
    );
  };