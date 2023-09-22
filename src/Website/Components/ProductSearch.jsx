import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Auth from '../Authantication/Auth';

const ProductSearch = () => {

  const {http}=Auth();
  const [product,setproduct]= useState([]);
  const location = useLocation();  
  const [SearchParam] = useSearchParams(location.search);
  const q = SearchParam.get('q');
   const filterdata =product.filter(record=>record.english_name.toLowerCase().includes(q.toLowerCase()));


   const getproduct =() =>{
     http.get("/products  ").then((response)=>{
      setproduct(response.data.products.data);
     }
     )
   }
   useEffect(() => {

    getproduct();
   },[])

  return (
    <div style={{marginTop:'200px'}}>
<div className="product-area pt-60 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="li-product-tab">
                <ul className="nav li-product-menu">
                  <li><a className="active" data-toggle="tab" href="#li-new-product"><span>product</span></a></li>

                </ul>
              </div>
             
            </div>
          </div>
          <div className="tab-content">
            <div id="li-new-product" className="tab-pane active show" role="tabpanel">
              <div className="row">

                {filterdata.map((product =>
                
                    <div className="col-lg-3 col-md-6 special-grid best-seller">
                    <div className="products-single fix">
                      <div className="box-img-hover">
                        <div className="type-lb">
                          <p className="sale">&#8377;{product.mrp_price - product.sale_price}Off</p>
                        </div>
                        <img src={product.product_image} alt={product.product_name} className="img-fluid" style={{ height: '200px' }} />
                        <div className="mask-icon">
                          <ul>
                            <li><Link to="/view" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></Link></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                          </ul>
                          <a className="cart" href="#">Add to Cart</a>
                        </div>
                      </div>
                      <div className="why-text">
                        <h4>{product.english_name}</h4>
                        <h5> {product.mrp_price}</h5>
                      </div>
                    </div>
                  </div>

                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductSearch 
