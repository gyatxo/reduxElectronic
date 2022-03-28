import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { showCart } from "../Redux/Action";

export default function Navbar() {
  const navigate = useNavigate()
  const countItem= useSelector(state=> state.shop.itemCount)
  const dispatch = useDispatch()
  return (
    <>
      <nav className="navbar ">
        <div className="container">
          <Link to='/' className="navbar-brand">Electronics</Link>
       
            <ul className="navbar-list">
              <Link to='/'><li>Home</li></Link>
              <li to='/cart'>
                 <i className="bi bi-cart2" onClick={()=>dispatch(showCart())}>  </i>  
                <span>{countItem}</span>
              </li>
              <li><i className="bi bi-person" onClick={()=>navigate('login')}></i></li>
            </ul>
    
        </div>
      </nav>
    </>
  );
}
