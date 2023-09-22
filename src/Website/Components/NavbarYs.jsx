import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { NavLink, Link, useSearchParams } from 'react-router-dom';
import './Navbarb.css'
import { useState, useEffect } from 'react';
import Auth from '../Authorization/Auth';
import { Modal } from 'react-bootstrap';
// import MyCart from '../Pages/MyCart';
const NavBarYs = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { http, logout, token } = Auth();
    const [cate, setcate] = useState([]);
    const [subcate, setsubcate] = useState([]);
    const [showmegamenu, setShowMegaMenu] = useState(false);
    const [brand, setbrand] = useState([]);
    const [showBrandMenu, setShowBrandMenu] = useState(false);
    const [cartItem, setCartItem] = useState([])
    const [cartCount, setCartCount] = useState([])
    const [wishList, setWishList] = useState([])
    const [wishListCount, setWishListCount] = useState([])
    const [search, setSerach] = useState('')
    const [param, setParam] = useSearchParams();

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
        fetch('https://vsmart.ajspire.com/api/categories').then(
            response => {
                return response.json();
            }
        ).then(
            data => {
                data.categories.forEach((category) => { getsubcate(category.category_id) })
                setcate(data.categories);
            }
        )
    }

    const getsubcate = (category_id) => {
        fetch(`https://vsmart.ajspire.com/api/subcategories/${category_id}`).then(
            response => {
                return response.json();
            }
        ).then(
            data => {
                const newsubcate = data.subcategories
                setsubcate((previoussubcate) => {
                    const filtersubcate = newsubcate.filter((newsubcate) => !previoussubcate.some((previoussubcate) => previoussubcate.subcategory_id === newsubcate.subcategory_id));
                    return [...previoussubcate, ...filtersubcate];
                });
            }
        )
    }


    const Getbrand = () => {
        fetch("https://vsmart.ajspire.com/api/brands").then(
            response => {
                return response.json();
            }
        ).then(
            data => {
                setbrand(data.brands)
            }
        )
    }

    const getCartProduct = () => {
        http.get(`/get-cart-list`)
            .then((response) => {
                setCartItem(response.data.cart)
                setCartCount(response.data.cart.length)
            })
    }

    const handleSearchChange = (obj) => {
        setSerach(obj.target.value);
    }

    const getWishListProduct = () => {
        http.get(`/get-wishlist`)
            .then((response) => {
                setWishList(response.data.wishlist)
                setWishListCount(response.data.wishlist.length)
            })
    }

    useEffect(() => {
        Getcate();
        Getbrand();
    }, []);


    useEffect(() => {
        if (token) {
            getCartProduct();
            getWishListProduct();
        }
    }, [token])


    return (
        <div className='fixed-top bg-light'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
                <div className='container' >
                    <Navbar.Brand href="#home" className='font-weight-bold btn border px-2 '>
                        Madane EnterPrise
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='mr-3'>
                        <Nav className="me-auto">
                            <Nav.Link ><NavLink className="is-active" to='/' >Home</NavLink> </Nav.Link>
                            <Nav.Link onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}><NavLink to="/category"  >Category</NavLink>
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
                                            {
                                                cate.map((el) => {

                                                    return (
                                                        <div key={el.category_id} className="col-sm-3">
                                                            <h5 className="font-weight-bold">
                                                                {el.category_name}
                                                            </h5>
                                                            {subcate.filter((sub) => sub.subcategory_category_id === el.category_id).slice(0, 6).map((sub) => (
                                                                <Link to={`/product-shop/${el.category_id}/${sub.subcategory_id}`}><li>{sub.subcategory_name}</li></Link>
                                                            ))}
                                                            <a href=".." style={{ color: "red", textDecoration: "" }}>view more</a>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Link>

                            <Nav.Link onMouseEnter={handmouseenter}
                                onMouseLeave={handmouseleave} >
                                <NavLink className="is-active" to='/BrandsPage' >Brands</NavLink>
                                <Dropdown
                                    show={showBrandMenu}
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
                                            {
                                                brand.map((el) => {

                                                    return (
                                                        <div key={el.brand} className="col-sm-3">
                                                            <h5 className="font-weight-bold">
                                                                {el.brand_name}
                                                            </h5>
                                                            {/* <Link to="/shopproduct">
                                                                <ul className='megamenu-list sub'>
                                                                    {subcate.filter((sub) => sub.subcategory_category_id === el.category_id).slice(0, 6).map((sub) => (

                                                                        <Link to={`/product-shop/${el.category_id}/${sub.subcategory_id}`}><li>{sub.subcategory_name}</li></Link>

                                                                    ))}

                                                                </ul>
                                                            </Link> */}
                                                            <a href=".." style={{ color: "red", textDecoration: "" }}>view more</a>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Link>
                            <Nav.Link ><NavLink className="is-active" to='/ShopPage'>Shop</NavLink></Nav.Link>
                            <Nav.Link ><NavLink className="is-active" to='/About'>About</NavLink></Nav.Link>
                            <Nav.Link ><NavLink className="is-active" to='/Blog'>Blog</NavLink></Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                token ?
                                    <Nav.Link><NavLink onClick={logout} to='/'>Logout</NavLink></Nav.Link> :
                                    <Nav.Link><NavLink to='/Login'>Login</NavLink></Nav.Link>
                            }
                        </Nav>

                    </Navbar.Collapse>

                </div>

            </Navbar >
            <div className='container bg-light '>
                <Navbar >

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <div className="col-lg-12 col-12 text-left">
                                <form action="">
                                    <div className="input-group">
                                        <input className="form-control " type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleSearchChange} />
                                        <Link to={`/search?q=${encodeURIComponent(search)}`} onChange={() => setParam({ q: search })}> <button className="btn btn-outline-danger " type="submit"> <i className="fa fa-search"></i>   </button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </Nav>
                        <Nav>
                            <Nav.Link href=".">
                                <button className="btn btn-outline-danger my-2 my-sm-0" type="submit"><i className="fas fa-wallet"></i></button>
                            </Nav.Link>
                            <Nav.Link>
                                {
                                    token ? (
                                        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={handleShow}><i className="fas fa-shopping-cart"></i><span>- {cartCount}</span></button>

                                    ) : (

                                        <NavLink to='/Login'><button className="btn btn-outline-danger my-2 my-sm-0" type="submit"> <i className="fas fa-shopping-cart"></i></button></NavLink>
                                    )}
                            </Nav.Link>

                            <Nav.Link href="#deets">
                                <button className="btn btn-outline-danger my-2 my-sm-0" type="submit"><i className="fas fa-random"></i>
                                </button>
                            </Nav.Link>
                            <Nav.Link  >
                                <Link to='/wishlist'> <button className="btn btn-outline-danger my-2 my-sm-0" type="submit"><i className="fas fa-heart"></i><span>-{wishListCount}</span></button></Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
                <Modal show={show} onHide={handleClose} centered >
                    <Modal.Header closeButton>
                        <Modal.Title>Total Products in Cart are {cartCount}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div>
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-12 table-responsive mb-5">
                                        <table className="table table-bordered text-center mb-0">
                                            <thead className="bg-secondary text-dark">
                                                <tr>
                                                    <th>Sr No</th>
                                                    <th>Products</th>
                                                    <th>Price</th>
                                                    <th>Qty</th> 

                                                </tr>
                                            </thead>
                                            {
                                                cartItem.slice(0, 4).map((el, index) => (

                                                    <tbody className="align-middle">
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td className="align-middle"><img src={`https://vsmart.ajspire.com/uploads/product_image/${el.product_image}`} alt style={{ width: 100 }} />
                                                                <br />
                                                                {el.english_name}</td>
                                                            <td className="align-middle">Rs.{el.sale_price}</td>
                                                            {/* <td className="align-middle">
                                                                <div className="input-group quantity " style={{ width: '60', fontSize: '0.5rem' }}>
                                                                    <div className="input-group-btn">
                                                                        <button className="btn btn-sm btn-danger btn-minus">
                                                                            <i className="fa fa-minus fa-sm" />
                                                                        </button>
                                                                    </div>
                                                                    <input type="text" className="form-control form-control-sm bg-secondary" />
                                                                    <div className="input-group-btn">
                                                                        <button className="btn btn-sm btn-danger btn-plus">
                                                                            <i className="fa fa-plus fa-sm" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </td> */}


                                                        </tr>

                                                    </tbody>
                                                ))
                                            }
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer className='mt-0'>
                        <Link className="btn btn-danger" role="button" to={'/MyCart'} onHide={handleClose}>View to Cart </Link>
                    </Modal.Footer>
                </Modal >


            </div >

        </div >

    );
}
export default NavBarYs;  