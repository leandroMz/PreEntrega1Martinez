import { FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom"

const UserWidget = () => {
  return (
    <div>
      <Link to={'/user'}>
        <FaUser />
      </Link>
    </div>
  )
}

export default UserWidget