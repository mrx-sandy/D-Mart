import React, { useEffect, useState } from "react";
import AuthUser from "../Authantication/Auth";
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, NavLink } from "react-bootstrap";

import { Dropdown } from "react-bootstrap";
import {
  faList,
  faSearch,
  faWallet,
  faRandom,
  faHeart,
  faShoppingBasket,

  // faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { http, logout, token } = AuthUser();
  const [cate, setcate] = useState([]);
  const [subcate, setsubcate] = useState([]);
  const [showmegamenu, setShowMegaMenu] = useState(false);
  const [brand, setbrand] = useState([]);
  const [showBrandMenu, setShowBrandMenu] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [wishListCount, setWishListCount] = useState([]);
  //  const [search, setsearch] = useState('');
  //   const [param, setparam] = useSearchParams();
  const [search, setSearch] = useState(""); // Use setSearch, not setSerach
  const [param, setParam] = useSearchParams(); // Use setParam, not setParam

  const handelSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleMouseEnter = () => {
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMegaMenu(false);
  };

  const handmouseenter = () => {
    setShowBrandMenu(true);
  };

  const handmouseleave = () => {
    setShowBrandMenu(false);
  };

  const Getcate = () => {
    fetch("https://vsmart.ajspire.com/api/categories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.categories.forEach((category) => {
          getsubcate(category.category_id);
        });
        setcate(data.categories);
      });
  };

  const getsubcate = (category_id) => {
    fetch(`https://vsmart.ajspire.com/api/subcategories/${category_id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newsubcate = data.subcategories;
        setsubcate((previoussubcate) => {
          const filtersubcate = newsubcate.filter(
            (newsubcate) =>
              !previoussubcate.some(
                (previoussubcate) =>
                  previoussubcate.subcategory_id === newsubcate.subcategory_id
              )
          );
          return [...previoussubcate, ...filtersubcate];
        });
      });
  };

  const Getbrand = () => {
    fetch("https://vsmart.ajspire.com/api/brands")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setbrand(data.brands);
      });
  };

  const getCartProduct = () => {
    http.get(`/get-cart-list`).then((response) => {
      setCartItem(response.data.cart);
      setCartCount(response.data.cart.length);
    });
  };

  const getWishListProduct = () => {
    http.get(`/get-wishlist`).then((response) => {
      setWishList(response.data.wishlist);
      setWishListCount(response.data.wishlist.length);
    });
  };

  useEffect(() => {
    Getcate();
    Getbrand();
  }, []);

  useEffect(() => {
    if (token) {
      getCartProduct();
      getWishListProduct();
    }
  }, [token]);

  return (
    <div className="main-top fixed-top">
      {/* Start Main Top */}
      <div className="main-top fixed-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="text-slid-box">
                <div id="offer-box" className="carouselTicker">
                  <ul className="offer-box">
                    <li>
                      <i className="fab fa-opencart" />
                      Welcome to <b> D-Mart</b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              {/* <div className="right-phone-box">
          <p>Call US :- <a href="#"> +91 705 792 1848</a></p>
        </div> */}

              

              <div className="our-link">
                <ul>


                <li>
                <input
                  type="text"
                  placeholder="Enter your search key ..."
                  value={search}
                  onChange={handelSearchChange}
                />
                <button class="li-btn">
                  <Link
                    to={`/productsearch?q=${encodeURIComponent(search)}`}
                    onChange={() => setParam({ q: search })}
                  >
                    <i class="fa fa-search"></i>
                  </Link>
                </button>
              </li>



                  {/* <li><a href="#">🙍🏻‍♂Login</a></li> */}
                  {token ? (
                    <li className="navbar-item ">
                      <a className="navbar-link " href="/login">
                        <Link to="/" onClick={logout}>
                          🙍🏻‍♂Sandip
                        </Link>
                      </a>
                    </li>
                  ) : (
                    <li className="navbar-item ">
                      <a className="navbar-link " href="/login">
                        <Link to="/login">🙍🏻‍♂Login</Link>
                      </a>
                    </li>
                  )}

                  <li className="navbar-item ">
                    <a className="navbar-link " href="/myorder">
                      <Link to="/myorder">My Order</Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="main-header mt-5">
        {/* Start Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
          <div className="container">
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-menu"
                aria-controls="navbars-rs-food"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars" />
              </button>
              <a className="navbar-brand" href="/home">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNivIJyGbJo6OYpC_B23eGJ11Cg9mrKgaliEj2-0c-ww&s"
                  className="logo"
                  style={{ height: "70px" }}
                  alt
                />
              </a>
            </div>
            {/* End Header Navigation */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse show" id="navbar-menu">
              <ul
                className="nav navbar-nav ml-auto"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="nav-item active">
                  <a className="nav-link" href="/" style={{ fontSize: "25px" }}>
                    Home
                  </a>
                </li>
                {/* <li className="nav-item active"><a className="nav-link" href="index.html">Category</a></li> */}
                <li className="nav-item ">
                  <Link
                    className="nav-link"
                    style={{ fontSize: "25px" }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Category
                  </Link>
                  <Dropdown
                    show={showmegamenu}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Dropdown.Menu
                      className="mega-menu"
                      style={{
                        height: "auto",
                        width: "1000px",
                        marginLeft: "-220px",
                      }}
                    >
                      <div className="row">
                        {cate.map((el) => {
                          return (
                            <div key={el.category_id} className="col-sm-3">
                              <h5 className="font-weight-bold">
                                {el.category_name}
                              </h5>
                              {subcate
                                .filter(
                                  (sub) =>
                                    sub.subcategory_category_id ===
                                    el.category_id
                                )
                                .slice(0, 6)
                                .map((sub) => (
                                  <Link
                                    to={`/product-shop/${el.category_id}/${sub.subcategory_id}`}
                                  >
                                    <li>{sub.subcategory_name}</li>
                                  </Link>
                                ))}
                              <a
                                href=".."
                                style={{ color: "red", textDecoration: "" }}
                              >
                                view more
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                {/* <li className="nav-item"><a className="nav-link" href="about.html">Brand</a></li> */}
                <li className="navbar-item dropdown-megamenu">
                  <Link
                    to="/"
                    className="nav-item nav-link"
                    style={{ fontSize: "25px" }}
                    onMouseEnter={handmouseenter}
                    onMouseLeave={handmouseleave}
                  >
                    <a>Brand</a>
                  </Link>

                  <Dropdown
                    show={showBrandMenu}
                    onMouseEnter={handmouseenter}
                    onMouseLeave={handmouseleave}
                  >
                    <Dropdown.Menu
                      className="mega-menu"
                      style={{
                        height: "auto",
                        width: "1000px",
                        marginLeft: "-220px",
                      }}
                    >
                      <div className="row">
                        {brand.slice(0, 20).map((subrand) => (
                          <div className="col-md-3" key={subrand.brand_id}>
                            <div className="megamenu-wrap">
                              <ul className="megamenu-list sub">
                                <Link to={`/product-shop/${subrand.brand_id}`}>
                                  <li>
                                    <a
                                      class="nav-link"
                                      href="/product-shop/178"
                                    >
                                      {subrand.brand_name}
                                    </a>
                                  </li>
                                </Link>
                              </ul>
                            </div>
                          </div>
                        ))}
                        <Link to="/braand">
                          <button>show more</button>
                        </Link>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/about"
                    style={{ fontSize: "25px" }}
                  >
                    About Us
                  </a>
                </li>
                {/* <li className="dropdown megamenu-fw">
                  <Link
                    className="nav-link "
                    data-toggle="dropdown"
                    to="/products"
                  >
                    Product
                  </Link>
                </li> */}
                <li className="dropdown">
                  <Link
                    to="/shop"
                    className="nav-link "
                    data-toggle="dropdown"
                    style={{ fontSize: "25px" }}
                  >
                    Shop
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="mycart">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="my-account.html">My Account</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="shop-detail.html">Shop Detail</a>
                    </li>
                  </ul>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="/checkout">
                    Checkout
                  </a>
                </li> */}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/contactus"
                    style={{ fontSize: "25px" }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="attr-nav">
              <ul>
                <li className="side-menu" to="/wishlist">
                  <a href="wishlist">
                    <i
                      className="fa fa-heart heart"
                      style={{ fontSize: "35px" }}
                    />
                    <span className="badge">{wishListCount}</span>
                  </a>
                </li>
                <li className="side-menu" to="/sidebar">
                  <a href="mycart">
                    <i
                      className="fa fa-shopping-bag"
                      style={{ fontSize: "35px" }}
                    />
                    <span className="badge">3</span>
                  </a>
                </li>
                <li className="side-menu" to="/checkout">
                  <a href="checkout">
                    <i
                      className="fa fa-truck truck"
                      style={{ fontSize: "35px" }}
                    />
                    <span className="badge">3</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="side">
            <a href="#" className="close-side">
              <i className="fa fa-times" />
            </a>
            <li className="cart-box"></li>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
