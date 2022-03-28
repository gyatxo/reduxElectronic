import React from 'react'
import { useDispatch } from 'react-redux';
import { filteredProducts } from '../Redux/Action';

function Filter() {
  const dispatch = useDispatch();
  // console.log(products,'out') 

  // const filterBtn = () => {
  //   let selectorValue = document.getElementById("filter-select").value;
  //   let minValue = document.getElementById("filter-min").value;
  //   let maxValue = document.getElementById("filter-max").value;
  //   let filteredProduct;

  //   if (selectorValue !== null && minValue !== "" && maxValue !== "") {
  //     filteredProduct = filterItem.filter((product) => {
  //       let newPrice = product.price.slice(1, product.price.length);
  //       let nepaliPrice = Number(newPrice) * 119;
  //       return (
  //         (nepaliPrice >= minValue && nepaliPrice) <= maxValue &&
  //         product.category[1] === selectorValue
  //       );
  //     });
  //   } else if (selectorValue) {
  //     filteredProduct = filterItem.filter((product) => {
  //       return product.category[1] === selectorValue;
  //     });
  //   }
  //   products = filteredProduct;
  //   console.log(products,'filter')
  // };
  return (
    <div className="product-header">
            <h4 className="product-title">Products</h4>
            <button
              className="product-btn"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              {" "}
              <i className="bi bi-funnel-fill"></i>Filter
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">Filter</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <h6>Price</h6>
                <div className="price-range">
                  <input type="number" placeholder="min" id="filter-min" />
                  -
                  <input type="number" placeholder="max" id="filter-max" />
                </div>

                <h6>Date</h6>
                <input className="date-input" type="date" placeholder="dd-mm-yyyy" />

                <h6>Category</h6>
                <select id="filter-select" className="category-select">
                  <option value="all">All</option>
                  <option value="laptop">Laptop</option>
                  <option value="mobile">Mobile</option>
                  <option value="keyboard">Keyboard</option>
                  <option value="headseat">Headset</option>
                  <option value="watch">Watch</option>
                </select>

                <div className="filter-btn">
                  <button className=" filter-cancel" data-bs-dismiss="offcanvas" aria-label="Close">
                    Cancel
                  </button>
                  <button
                    onClick={()=> dispatch(filteredProducts())}
                    className="filter-apply"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Filter