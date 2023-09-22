import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Auth from '../Authantication/Auth';

const FeatureProduct = () => {
  const [ourpro, setOurPro] = useState([]);
  const { http, token } = Auth();

  useEffect(() => { // Use useEffect to fetch data
    fetch("https://vsmart.ajspire.com/api/products")
      .then((response) => response.json())
      .then((data) => {
        setOurPro(data.products.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array to run the effect once on component mount

  const addToCart = (product_id) => {
    http.get(`/add-to-cart/${product_id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
      });
  };

  const addToWishlist = (product_id) => { // Correct the function name
    http.get(`/add-to-wishlist/${product_id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error adding product to wishlist:', error);
      });
  };

  return (
    <>
      {/* Start Products */}
      <div className="products-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-all text-center">
                <h1>Featured Products</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="special-menu text-center">
                <div className="button-group filter-button-group">
                  <button className="active" data-filter="*">All</button>
                  {/* <button className="active" data-filter=".top-featured">Top featured</button> */}
                  {/* <button data-filter=".best-seller">Best seller</button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row special-list">
            {ourpro.slice(0, 20).map((el) => (
              <div className="col-lg-3 col-md-6 special-grid best-seller" key={el.product_id}>
                <div className="products-single fix">
                  <div className="box-img-hover">
                    <div className="type-lb">
                      <p className="sale">{el.mrp_price-el.sale_price} off/-</p>
                    </div>
                    <img src={el.product_image} className="img-fluid" alt="Image" />
                    <div className="mask-icon">
                      <ul>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                      </ul>
                      {token ? (
                        <a className="cart" href="#" onClick={() => addToCart(el.product_id)}>Add to Cart</a>
                      ) : (
                        <Link to={'/login'}>Add to Cart</Link>
                      )}
                      <a className="wishlist" href="#" onClick={() => addToWishlist(el.product_id)}>Add to Wishlist</a>
                    </div>
                  </div>
                  <div className="why-text">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <h5>$7.79</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
