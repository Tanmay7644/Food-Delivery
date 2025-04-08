import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Badge } from 'react-bootstrap';
import Modal from 'D:/Web Development/Projects/Food Delivery App/src/Modal.jsx'
import { useCart } from './ContextReducer.jsx'
import Cart from './Cart';
const NavBar = () => {
  const navigate=useNavigate();
  const handleLogout = () => { 
    localStorage.removeItem("authToken");
    navigate("/login");
  } 
  let data=useCart();
  const [cartView, setCartView] = React.useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fst-italic" to="/">FoodDelivery</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>

            {(localStorage.getItem("authToken"))
              ? <li className='nav-item'>
                <Link className='nav-link active' to="/myOrder" >My Orders</Link>
              </li>
              : ""}
          </ul>

          {(!localStorage.getItem("authToken"))
            ?
            <div>
            <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
            <Link className="btn bg-white text-success mx-1" to="/createUser">Signup</Link>
            </div>
            : 
            <div>
              <div className="btn bg-white text-success mx-2 " onClick={()=>{setCartView(true)}}>
                My Cart  
                <Badge pill bg="danger">{data.length || 0}</Badge>
                </div>
                {cartView?<Modal onClose={()=>setCartView(false)}><Cart></Cart></Modal>:""}
              <div className="btn bg-white text-danger mx-1" onClick={handleLogout}>Logout</div>
            </div>
          }

      </div>
    </div>
    </nav >
  )
}

export default NavBar