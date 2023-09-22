import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Authantication/Auth';

const MyCart = () => {
  const { http, token, logout } = Auth();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState([]);
  const [ourpro, setOurPro] = useState([]);
  const [cartId, setCartId] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [pvTotal, setPVTotal] = useState(0);
  const [taxTotal, setTaxTotal] = useState(0);
  const [discountTotal, setDiscountTotal] = useState(0);

  const getProducts = () => {
    fetch('https://vsmart.ajspire.com/api/products')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setOurPro(data.products.data);
      });
  };

  const getCartProduct = () => {
    http
      .get(`/get-cart-list`)
      .then((response) => {
        console.log(response.data);
        setCartCount(response.data.cart.length);
        setCartItems(response.data.cart);
        let subTotal = 0;
        let pvTotal = 0;
        let taxTotal = 0;
        let discountTotal = 0;
        response.data.cart.forEach((item) => {
          subTotal += item.online_price * item.cart_product_qty;
          pvTotal = pvTotal + parseFloat(item.products_basic_pv);
          taxTotal += item.tax_per;
          // Calculate discountTotal based on your logic
          // discountTotal += ???
        });
        setSubTotal(subTotal);
        setPVTotal(pvTotal);
        setTaxTotal(taxTotal);
        setDiscountTotal(discountTotal);
        // Assuming the response contains the list of cart items
      });
  };

  useEffect(() => {
    if (token) {
      getCartProduct();
    }
  }, [token], cartId);

  const RemovefromCart = (cart_id) => {
    http
      .get(`/remove-to-cart/${cart_id}`)
      .then((response) => {
        console.log(response.data);
        setCartId(cart_id);
        alert('Product removed from Cart successfully');
      })
      .catch((error) => {
        console.error('Error removing product from cart', error);
      });
  };

  return (
    <div>
      <div className="container " style={{ marginTop: '200px' }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="table-main table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ color: 'red', background: 'black' }}>Sr.No.</th>
                    <th style={{ color: 'red', background: 'black' }}>Images</th>
                    <th style={{ color: 'red', background: 'black' }}>Name</th>
                    <th style={{ color: 'red', background: 'black' }}>Price</th>
                    <th style={{ color: 'red', background: 'black' }}>Brand</th>
                    <th style={{ color: 'red', background: 'black' }}>Quantity</th>
                    <th style={{ color: 'red', background: 'black' }}>Tax</th>
                    <th style={{ color: 'red', background: 'black' }}>Pv</th>
                    <th style={{ color: 'red', background: 'black' }}>Total</th>
                    <th style={{ color: 'red', background: 'black' }}>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className="thumbnail-img">
                        <a href="#">
                          <img
                            src={`https://vsmart.ajspire.com/uploads/product_image/${item.product_image}`}
                            alt=""
                            style={{ height: '100px' }}
                          />
                        </a>
                      </td>
                      <td className="name-pr">
                        <h5>{item.english_name}</h5>
                      </td>
                      <td className="price-pr">
                        <p style={{ color: 'red' }}>{item.online_price}</p>
                      </td>


                      <td>{item.brand_name}</td>


                      <td className="quantity-box">
                        <input
                          type="number"
                          size={4}
                          value={item.cart_product_qty}
                          min={0}
                          step={1}
                          className="c-input-text qty text"
                        />
                      </td>
                      <td className="total-pr">
                        <p style={{ color: 'red' }}>{item.tax_per}</p>
                      </td>
                      <td>
                        <p style={{ color: 'red' }}>{item.products_basic_pv}</p>
                      </td>
                      <td className="remove-pr">
                        <p style={{ color: 'red' }}>
                          {item.online_price * item.cart_product_qty}
                        </p>
                      </td>
                      <td className="align-middle">
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => RemovefromCart(item.cart_id)}
                        >
                          <i className="fa fa-times" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row my-5 " style={{justifyContent:'center'}}>
          <div className="col-lg-8 col-sm-12" />
          <div className="col-lg-4 col-sm-12">
            <div className="order-box">
              <h2 style={{ color: 'red', background: 'black', paddingLeft: '100px' }}>
                Order Summary
              </h2>

              <div className="d-flex">
                <h4>Sub Total</h4>
                <div className="ml-auto font-weight-bold">{subTotal}</div>
              </div>

              <div className="d-flex">
                <h4>pvTotal</h4>
                <div className="ml-auto font-weight-bold">{pvTotal}</div>
              </div>
              <hr className="my-1" />

              <div className="d-flex">
                <h4>taxTotal</h4>
                <div className="ml-auto font-weight-bold">{taxTotal}</div>
              </div>

              <div className="d-flex">
                <h4>discountTotal</h4>
                <div className="ml-auto font-weight-bold">{discountTotal}</div>
              </div>

              <div className="d-flex">
                <h4>Shipping Cost</h4>
                <div className="ml-auto font-weight-bold"> Free </div>
              </div>
              <hr />

              <div className="d-flex gr-total">
                <h5>Grand Total</h5>
                <div className="ml-auto h5"> {subTotal}</div>
              </div>
              <hr />
            </div>
          </div>
          <div className="col-12 d-flex shopping-box">
            <Link to="/checkout" className="ml-auto btn hvr-hover">
            <a
            style={{ color: 'white',background:'green' }} 
             >
               Checkout </a>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MyCart;
