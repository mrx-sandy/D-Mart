import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../Authantication/Auth";

const Products = () => {
  const [ourpro, setourpro] = useState([]);
  const { http, token } = Auth();

  fetch("https://vsmart.ajspire.com/api/products")
    .then((response) => response.json())
    .then((data) => {
      setourpro(data.products.data);
    })

    .catch((error) => console.error("Error fetching data:", error));

  const addToCart = (product_id) => {
    http
      .get(`/add-to-cart/${product_id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error adding product to cart:", error);
      });
  };
  const addtowishlist = (product_id) => {
    http
      .get(`add-to-wishlist/${product_id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error adding product to wishlist:", error);
      });
  };
  return (
    <div>
      <div class="products-box">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="title-all text-center">
                <h1> Products</h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="special-menu text-center">
                <div class="button-group filter-button-group">
                  <button class="active" data-filter="*">
                    All
                  </button>
                  <button data-filter=".top-featured">Top featured</button>
                  <button data-filter=".best-seller">Best seller</button>
                </div>
              </div>
            </div>
          </div>

          <div class="row special-list">
            {ourpro.slice(0, 20).map((el) => (
              <div class="col-lg-3 col-md-6 special-grid best-seller">
                <div class="products-single fix">
                  <div class="box-img-hover">
                    <div class="type-lb">
                      <p class="sale">{el.mrp_price - el.sale_price}off</p>
                    </div>
                    <img src={el.product_image} class="img-fluid" alt="Image" />
                    <div class="mask-icon">
                      <ul>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="View"
                          >
                            <i class="fas fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Compare"
                          >
                            <i class="fas fa-sync-alt"></i>
                          </a>
                        </li>
                        <li>
                          {" "}
                          <Link
                            to="/wishlist"
                            data-toggle="tooltip"
                            onClick={() => addtowishlist(el.product_id)}
                            data-placement="right"
                            title="Add to Wishlist"
                          >
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Add to Wishlist"
                            >
                              <i class="far fa-heart"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                      {token ? (
                        <Link to="/mycart">
                          <a
                            className="button"
                            href="#"
                            onClick={() => addToCart(el.product_id)}
                          >
                            Add to Cart
                          </a>
                        </Link>
                      ) : (
                        <Link to={"/login"}>Add to Cart</Link>
                      )}
                    </div>
                  </div>
                  <div class="why-text">
                    <h4> {el.english_name}</h4>
                    <h5>{el.mrp_price}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
