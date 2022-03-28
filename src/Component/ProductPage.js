import { useEffect } from 'react'
import Cart from './Cart'
import Filter from './Filter'
import axios from "axios";
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, filterProducts } from '../Redux/Action';


function ProductPage() {
    const products = useSelector((state)=> state.shop.products)
    const showCart = useSelector(state=> state.shop.showCart)
    const dispatch = useDispatch();


const fetchProduct = async () =>{
    const response = await axios.get('https://electronic-ecommerce.herokuapp.com/api/v1/product')
  
    if(response?.data?.data?.product){
      dispatch(fetchProducts(response.data.data.product))
      dispatch(filterProducts(response.data.data.product))
    }
}


  useEffect(()=>{
  fetchProduct()
  })


      return (
    <>
        <div className="product-container container">
          <Filter />
          {showCart? <Cart/>: ''}
          <div className="row product-row">
            
              {products.map((product) => (
                <div key={product.id} className="col-md-3">
                  <ProductCard
                    productName={product.name}
                    price={product.price}
                    stock={product.stock}
                    imgName={product.image}
                    product={product}
                    id={product.id}
                    productDate={product.createDate}
                  />
                </div>
              ))}
            
          </div>
        </div>
    </>
      )}


export default ProductPage