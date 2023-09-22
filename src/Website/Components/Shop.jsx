import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Auth from '../Authantication/Auth';

const Shop = () => {
    const [filtercat, setFilterCategory] = useState([]);
    const [filterbrand, setFilterBrand] = useState([]);
    const [shop, setShop] = useState([]);
    const{http,token}=Auth();

    const addToCart = (productId) => {
        http.post(`/add-to-cart/${productId}`)
          .then(response => {
            console.log('Product added to cart:', response.data);
          })
          .catch(error => {
            console.error('Error adding product to cart:', error);
          });
      };
    useEffect(() => {
        fetch("https://vsmart.ajspire.com/api/categories")
            .then((response) => response.json())
            .then((dataa) => {
                setFilterCategory(dataa.categories);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });

        fetch("https://vsmart.ajspire.com/api/shop")
            .then((response) => response.json())
            .then((dataa) => {
                console.log(dataa);
                setShop(dataa.product.data);
            })
            .catch((error) => {
                console.error("Error fetching shop data:", error);
            });

        fetch("https://vsmart.ajspire.com/api/brands")
            .then((response) => response.json())
            .then((dataa) => {
                setFilterBrand(dataa.brands);
            })
            .catch((error) => {
                console.error("Error fetching brands:", error);
            });
    }, []);

    return (
        <div className="maincontainer mt-5" style={{background:"light"}}> 
            <div className="all-title-box">
                <div className="container mt-5">
                    <div className="row">
                        <div class="col-lg-12">
                            <h2>Shop</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">View All Products</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row content-reverse">
                    <div className="col-lg-3">
                        <div className="shop-widget" style={{
                          
                        }}>
                            <h3 className="shop-widget-title">Filter by Category</h3>
                            <form>
                                <ul class="shop-widget-list shop-widget-scroll " style={{ maxHeight: 379, overflowY: 'scroll', paddingRight: 10,background:"pink" }}>
                                    {filtercat.map((ell) => (
                                        <div className="custom-control custom-checkbox d-flex align-items-center  mb-3">
                                            <input type="checkbox" className="custom-control-input" defaultChecked id={`category-${ell.id}`} />
                                            <label className="custom-control-label" htmlFor={`category-${ell.id}`}>{ell.category_name}</label>
                                        </div>
                                    ))}
                                </ul>
                            </form>
                        </div>

                        <div className="shop-widget ">
                            <h3 className="shop-widget-title">Filter by Brands</h3>
                            <form>
                                <ul class="shop-widget-list shop-widget-scroll" style={{ maxHeight: 399, overflowY: 'scroll', paddingRight: 10,background:"pink"  }}>
                                    {filterbrand.map((el) => (
                                        <div className="custom-control custom-checkbox d-flex align-items-center  mb-3">
                                            <input type="checkbox" className="custom-control-input" defaultChecked id={`brand-${el.id}`} />
                                            <label className="custom-control-label" htmlFor={`brand-${el.id}`}>{el.brand_name}</label>
                                        </div>
                                    ))}
                                </ul>
                            </form>
                        </div>
                    </div>

                    <div class="col-lg-9 mt-5">
                        <div class="row special-list">
                            {shop .map((product) => (
                                <div class="col-lg-3 col-md-6 special-grid best-seller" key={product.brand_id}>
                                    <div class="products-single fix">
                                        <div class="box-img-hover">
                                            <div class="type-lb">
                                                <p class="sale">{product.mrp_price - product.sale_price}rs off</p>
                                            </div>
                                            <img src={product.product_image} class="img-fluid" alt="Product" style={{ maxHeight: 450}} />
                                            <div class="mask-icon">
                                                <ul>
                                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                                                </ul>
                                                {token ?( <button   onClick={() => addToCart(product.id)}><a className="cart">Add to Cart</a></button>):(
                                <Link to={'/login'}> Add to Cart</Link>)
                                                }
                                                  {/* <a className="cart" href="#"onClick={() => addToCart(product.id)}>Add to Cart</a> */}
                                                  
                                                
                                                
                                            </div>
                                        </div>
                                        <div class="why-text">
                                            <h4>{product.english_name}</h4>
                                           <h5>MRP:{product.mrp_price} only/-</h5>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Shop



