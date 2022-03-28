import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../Redux/Action";
import ItemAddDec from "./ItemAddDec";

export default function ProductCard(props) {

    const {productName,price,stock,imgName,product,productDate,id} = props;
    const dispatch = useDispatch()

  

    let newPrice = price.slice(1,price.length);
    let nepaliPrice = Number(newPrice) * 119;

    let imgSrc = `https://electronic-ecommerce.herokuapp.com/${imgName}`
  return (
    
  <div className="card" style={{ width: "18rem" }}>
    <Link to= {`/product${id}`} style={{textDecoration:"none" , color:"black"}}>
    <div className="card-img">
      <img
        src = {imgSrc} 
        className="card-img-top"
        alt="laptop"
      />
    </div>
    </Link>
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
