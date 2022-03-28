import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../Redux/Action';
import ItemAddDec from './ItemAddDec';


function ProductDetails() {
    const product = useSelector(state=> state.shop.products)
    const dispatch = useDispatch()
    const {id}= useParams();
    let productDetails = product.filter((prod)=> prod.id === parseInt(id) ? product : '')
    const {name:productName,image:imgName,price,stock,createDate:productDate}= productDetails[0]
    let newPrice = price.slice(1,price.length);
    let nepaliPrice = Number(newPrice) * 119;
    
    let imgSrc = `https://electronic-ecommerce.herokuapp.com/${imgName}`
    
  return (
    
    <div className="card" style={{ width: "18rem" }}>
    <div className="card-img">
      <img
        src = {imgSrc} 
        className="card-img-top"
        alt="laptop"
      />
    </div>
    
    <ItemAddDec />
    
    <div className="card-body">
      <div className="card-description">
        <p>{productName}</p>
        <div className="card-price">
          <p>Rs: {nepaliPrice}</p>
          <span>Stocks left: {stock}</span>
        </div>
        <p>Released on: {new Date(productDate).toString().slice(0,15)}</p>
      </div>

      <button  className="btn btn-primary addBtn" onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  </div>
    
  );
}

export default ProductDetails