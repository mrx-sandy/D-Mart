import React from 'react'

const MyOrder = () => {
  return (
    <div>
      <section className="inner-section single-banner" >
        <div className="container">
            <h2>Order History</h2>
            <h4 className="text-white">
                <ol className="breadcrumb">
                    <i className="fas fa-home"></i> &nbsp;<li className="breadcrumb-item"><a href="/">Home</a></li>
                    /<li aria-current="page"> View Orders</li>
                </ol>
            </h4>
        </div>

    </section>

   <section className="inner-section orderlist-part">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="orderlist">
          <div className="orderlist-head">
            <h5>order#11</h5>
          </div>
          <div className="orderlist-body" style={{display: 'block'}}>
            <div className="row">
              <div className="col-lg-12">
                <div className="order-track">
                  <ul className="order-track-list">
                    <li className="order-track-item active"><i className="icofont-check" /><span>order Pending</span></li>
                    <li className="order-track-item "><i className="icofont-close" /><span>order
                        Accepted</span></li>
                    <li className="order-track-item"><i className="icofont-close" /><span>order
                        Shipped</span></li>
                    <li className="order-track-item"><i className="icofont-close" /><span>order
                        Transporting</span></li>
                    <li className="order-track-item"><i className="icofont-close" /><span>order
                        delivered</span></li>
                    <li className="order-track-item "><i className="icofont-close" /><span>order
                        Rejected</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <ul className="orderlist-details">
                  <li>
                    <h6>order id</h6>
                    <p>11</p>
                  </li>
                  <li>
                    <h6>Total Item</h6>
                    <p>6Items</p>
                  </li>
                  <li>
                    <h6>Order Time</h6>
                    <p>2023-08-10 04:43:29</p>
                  </li>
                  <li>
                    <h6>Delivery Time</h6>
                    <p> After Accepted Order Required Minimum 2 Days To Place Order</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="orderlist-details">
                  <li>
                    <h6>Cash Transaction Mode</h6>
                    <p>
                    </p>
                  </li>
                  <li>
                    <h6>delivery fee</h6>
                    <p>Free Of Cost Delivery</p>
                  </li>
                  <li>
                    <h6>Total<small>(Incl.TAX)</small></h6>
                    <p>₹58.45</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <div className="orderlist-deliver">
                  <h6>Delivery location</h6>
                  <p>Phaltan</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="table-scroll">
                  <table className="table-list">
                    <thead>
                      <tr>
                        <th scope="col">Serial</th>
                        <th scope="col">Product</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">brand</th>
                        <th scope="col">quantity</th>
                        <th scope="col">Return Order</th>
                      </tr>
                    </thead>
                   <tbody>
                   <tr>
                        <td className="table-serial">
                          <h6>1</h6>
                        </td>
                        <td className="table-image">
                          <img src="https://vsmart.ajspire.com/uploads/product_image/1653126580.jpg" alt="product" style={{width: '100', height: '100'}} />
                        </td>
                        <td className="table-name">
                          <h6>MOVE OINTMENT 10G</h6>
                        </td>
                        <td className="table-price">
                          <h6>₹43.00<small>/Nos</small>
                          </h6>
                        </td>
                        <td className="table-brand">
                          <h6>Reckitt Benckiser </h6>
                        </td>
                        <td className="table-quantity">
                          <h6>1.00</h6>
                        </td><td>
                          <a style={{width: 50, height: 50}} className="btn btn-danger" title href="/return/2484/507" data-original-title="Return"><i className="fa fa-reply" /></a>
                        </td>
                      </tr>
                   </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="orderlist">
          <div className="orderlist-head">
            <h5>order#12</h5>
          </div>
          <div className="orderlist-body" style={{display: 'none'}}>
            <div className="row">
              <div className="col-lg-12">
                <div className="order-track">
                  <ul className="order-track-list">
                    <li className="order-track-item active"><i className="icofont-check" /><span>order Pending</span></li>
                    <li className="order-track-item "><i className="icofont-close" /><span>order
                        Accepted</span></li>
                    <li className="order-track-item"><i className="icofont-close" /><span>order
                        Shipped</span></li>
                    <li className="order-track-item"><i className="icofont-close" /><span>order
                        Transporting</span></li>
                    <li className="order-track-item"><i className="icofont-close" /><span>order
                        delivered</span></li>
                    <li className="order-track-item "><i className="icofont-close" /><span>order
                        Rejected</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <ul className="orderlist-details">
                  <li>
                    <h6>order id</h6>
                    <p>12</p>
                  </li>
                  <li>
                    <h6>Total Item</h6>
                    <p>6Items</p>
                  </li>
                  <li>
                    <h6>Order Time</h6>
                    <p>2023-08-10 04:43:29</p>
                  </li>
                  <li>
                    <h6>Delivery Time</h6>
                    <p> After Accepted Order Required Minimum 2 Days To Place Order</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="orderlist-details">
                  <li>
                    <h6>Cash Transaction Mode</h6>
                    <p>
                    </p>
                  </li>
                  <li>
                    <h6>delivery fee</h6>
                    <p>Free Of Cost Delivery</p>
                  </li>
                  <li>
                    <h6>Total<small>(Incl.TAX)</small></h6>
                    <p>₹58.45</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <div className="orderlist-deliver">
                  <h6>Delivery location</h6>
                  <p>Phaltan</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="table-scroll">
                  <table className="table-list">
                    <thead>
                      <tr>
                        <th scope="col">Serial</th>
                        <th scope="col">Product</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">brand</th>
                        <th scope="col">quantity</th>
                        <th scope="col">Return Order</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="table-serial">
                          <h6>3</h6>
                        </td>
                        <td className="table-image">
                          <img src="https://vsmart.ajspire.com/uploads/product_image/1656328141.jpg" alt="product" style={{width: 100, height: 100}} />
                        </td>
                        <td className="table-name">
                          <h6>Ponds Pink Lily Powder Rs.10</h6>
                        </td>
                        <td className="table-price">
                          <h6>₹10.00<small>/Nos</small>
                          </h6>
                        </td>
                        <td className="table-brand">
                          <h6>Hindustan Uniliver Ltd</h6>
                        </td>
                        <td className="table-quantity">
                          <h6>1.00</h6>
                        </td><td>
                          <a style={{width: 50, height: 50}} className="btn btn-danger" title href="/return/2486/1278" data-original-title="Return"><i className="fa fa-reply" /></a>
                        </td>
                      </tr>
                      <tr />
                      <tr />
                      <tr>
                        <td className="table-serial">
                          <h6>4</h6>
                        </td>
                        <td className="table-image">
                          <img src="https://vsmart.ajspire.com/uploads/product_image/1664014302.jpg" alt="product" style={{width: 100, height: 100}} />
                        </td>
                        <td className="table-name">
                          <h6>Tic Tac Saunf Flavour</h6>
                        </td>
                        <td className="table-price">
                          <h6>₹10.00<small>/Nos</small>
                          </h6>
                        </td>
                        <td className="table-brand">
                          <h6>Fererro India Pvt ltd</h6>
                        </td>
                        <td className="table-quantity">
                          <h6>1.00</h6>
                        </td><td>
                          <a style={{width: 50, height: 50}} className="btn btn-danger" title href="/return/2487/1221" data-original-title="Return"><i className="fa fa-reply" /></a>
                        </td>
                      </tr>
                      <tr />
                      <tr />
                      <tr>
                        <td className="table-serial">
                          <h6>99</h6>
                        </td>
                        <td className="table-image">
                          <img src="https://vsmart.ajspire.com/uploads/product_image/1653461289.jpg" alt="product" style={{width: 100, height: 100}} />
                        </td>
                        <td className="table-name">
                          <h6>surabhi Ginger Garlic Paste 25g</h6>
                        </td>
                        <td className="table-price">
                          <h6>₹5.00<small>/Nos</small>
                          </h6>
                        </td>
                        <td className="table-brand">
                          <h6>Aadinath agro food Pvt Ltd</h6>
                        </td>
                        <td className="table-quantity">
                          <h6>2.00</h6>
                        </td><td>
                          <a style={{width: 50, height: 50}} className="btn btn-danger" title href="/return/73047/22" data-original-title="Return"><i className="fa fa-reply" /></a>
                        </td>
                      </tr>
                      <tr />
                      <tr />
                      <tr>
                        <td className="table-serial">
                          <h6>100</h6>
                        </td>
                        <td className="table-image">
                          <img src="https://vsmart.ajspire.com/uploads/product_image/1653389150.jpg" alt="product" style={{width: 100, height: 100}} />
                        </td>
                        <td className="table-name">
                          <h6>COMFORT MORNING FRESH 19 ML</h6>
                        </td>
                        <td className="table-price">
                          <h6>₹4.00<small>/Nos</small>
                          </h6>
                        </td>
                        <td className="table-brand">
                          <h6>Hindustan Uniliver Ltd</h6>
                        </td>
                        <td className="table-quantity">
                          <h6>1.00</h6>
                        </td><td>
                          <a style={{width: 50, height: 50}} className="btn btn-danger" title href="/return/73048/23" data-original-title="Return"><i className="fa fa-reply" /></a>
                        </td>
                      </tr>
                      <tr />
                      <tr />
                      <tr>
                        <td className="table-serial">
                          <h6>101</h6>
                        </td>
                        <td className="table-image">
                          <img src="https://vsmart.ajspire.com/uploads/product_image/1653461393.jpeg" alt="product" style={{width: 100, height: 100}} />
                        </td>
                        <td className="table-name">
                          <h6>Shankeshwari 10gm</h6>
                        </td>
                        <td className="table-price">
                          <h6>₹10.00<small>/Nos</small>
                          </h6>
                        </td>
                        <td className="table-brand">
                          <h6>General</h6>
                        </td>
                        <td className="table-quantity">
                          <h6>3.00</h6>
                        </td><td>
                          <a style={{width: 50, height: 50}} className="btn btn-danger" title href="/return/73049/24" data-original-title="Return"><i className="fa fa-reply" /></a>
                        </td>
                      </tr>
                      <tr />
                      <tr />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="orderlist">
          <div className="orderlist-head">
            <h5>order#19</h5>
          </div>
          <div className="orderlist-body" style={{display: 'none'}}>
            <div className="row">
              <div className="col-lg-12">
                <div className="order-track">
                  <ul className="order-track-list">
                    <li className="order-track-item active"><i className="icofont-check" /><span>order Pending</span></li>
                    <li className="order-track-item "><i className="icofont-close" /><span>order
                        Accepted</span></li>
                    <li className="order-track-item"><i className="icofont-close" /><span>order
                        Shipped</span></li>
                    <li className="order-track-item"><i className="icofont-close" /><span>order
                        Transporting</span></li>
                    <li className="order-track-item"><i className="icofont-close" /><span>order
                        delivered</span></li>
                    <li className="order-track-item "><i className="icofont-close" /><span>order
                        Rejected</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <ul className="orderlist-details">
                  <li>
                    <h6>order id</h6>
                    <p>19</p>
                  </li>
                  <li>
                    <h6>Total Item</h6>
                    <p>6Items</p>
                  </li>
                  <li>
                    <h6>Order Time</h6>
                    <p>2023-08-10 04:43:29</p>
                  </li>
                  <li>
                    <h6>Delivery Time</h6>
                    <p> After Accepted Order Required Minimum 2 Days To Place Order</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="orderlist-details">
                  <li>
                    <h6>Cash Transaction Mode</h6>
                    <p>
                    </p>
                  </li>
                  <li>
                    <h6>delivery fee</h6>
                    <p>Free Of Cost Delivery</p>
                  </li>
                  <li>
                    <h6>Total<small>(Incl.TAX)</small></h6>
                    <p>₹58.45</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <div className="orderlist-deliver">
                  <h6>Delivery location</h6>
                  <p>Phaltan</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="table-scroll">
                  <table className="table-list">
                    <thead>
                      <tr>
                        <th scope="col">Serial</th>
                        <th scope="col">Product</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">brand</th>
                        <th scope="col">quantity</th>
                        <th scope="col">Return Order</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="table-serial">
                          <h6>5</h6>
                        </td>
                        <td className="table-image">
                          <img src="https://vsmart.ajspire.com/uploads/product_image/default.png" style={{width: 100, height: 100}} alt="product" />
                        </td>
                        <td className="table-name">
                          <h6>VS Mart Bag</h6>
                        </td>
                        <td className="table-price">
                          <h6>₹10.00<small>/Nos</small>
                          </h6>
                        </td>
                        <td className="table-brand">
                          <h6>General</h6>
                        </td>
                        <td className="table-quantity">
                          <h6>1.00</h6>
                        </td><td>
                          <a style={{width: 50, height: 50}} className="btn btn-danger" title href="/return/2506/2437" data-original-title="Return"><i className="fa fa-reply" /></a>
                        </td>
                      </tr>
                      <tr />
                      <tr />
                      <tr>
                        <td className="table-serial">
                          <h6>6</h6>
                        </td>
                        <td className="table-image">
                          <img src="https://vsmart.ajspire.com/uploads/product_image/1661323562.webp" alt="product" style={{width: 100, height: 100}} />
                        </td>
                        <td className="table-name">
                          <h6>Santoor Hand Wash Classic 750Ml</h6>
                        </td>
                        <td className="table-price">
                          <h6>₹94.00<small>/Nos</small>
                          </h6>
                        </td>
                        <td className="table-brand">
                          <h6>Wipro</h6>
                        </td>
                        <td className="table-quantity">
                          <h6>1.00</h6>
                        </td><td>
                          <a style={{width: 50, height: 50}} className="btn btn-danger" title href="/return/2507/2014" data-original-title="Return"><i className="fa fa-reply" /></a>
                        </td>
                      </tr>
                      <tr />
                      <tr />
                      <tr>
                        <td className="table-serial">
                          <h6>7</h6>
                        </td>
                        <td className="table-image">
                          <img src="https://vsmart.ajspire.com/uploads/product_image/1659072056.jpg" alt="product" style={{width: 100, height: 100}} />
                        </td>
                        <td className="table-name">
                          <h6>Vim Lemon Dishwash liquid Rs.20</h6>
                        </td>
                        <td className="table-price">
                          <h6>₹20.00<small>/Nos</small>
                          </h6>
                        </td>
                        <td className="table-brand">
                          <h6>Hindustan Uniliver Ltd</h6>
                        </td>
                        <td className="table-quantity">
                          <h6>3.00</h6>
                        </td><td>
                          <a style={{width: 50, height: 50}} className="btn btn-danger" title href="/return/2508/1624" data-original-title="Return"><i className="fa fa-reply" /></a>
                        </td>
                      </tr>
                      <tr />
                      <tr />
                      <tr>
                        <td className="table-serial">
                          <h6>8</h6>
                        </td>
                        <td className="table-image">
                          <img src="https://vsmart.ajspire.com/uploads/product_image/default.png" style={{width: 100, height: 100}} alt="product" />
                        </td>
                        <td className="table-name">
                          <h6>Tide White Soap 145g</h6>
                        </td>
                        <td className="table-price">
                          <h6>₹10.00<small>/Nos</small>
                          </h6>
                        </td>
                        <td className="table-brand">
                          <h6>P &amp;G</h6>
                        </td>
                        <td className="table-quantity">
                          <h6>1.00</h6>
                        </td><td>
                          <a style={{width: 50, height: 50}} className="btn btn-danger" title href="/return/2509/2409" data-original-title="Return"><i className="fa fa-reply" /></a>
                        </td>
                      </tr>
                      <tr />
                      <tr />
                      <tr>
                        <td className="table-serial">
                          <h6>9</h6>
                        </td>
                        <td className="table-image">
                          <img src="https://vsmart.ajspire.com/uploads/product_image/1656333205.jpg" alt="product" style={{width: 100, height: 100}} />
                        </td>
                        <td className="table-name">
                          <h6>Sensodyne Rapid Relief Rs.95</h6>
                        </td>
                        <td className="table-price">
                          <h6>₹91.00<small>/Nos</small>
                          </h6>
                        </td>
                        <td className="table-brand">
                          <h6>Hindustan Uniliver Ltd</h6>
                        </td>
                        <td className="table-quantity">
                          <h6>1.00</h6>
                        </td><td>
                          <a style={{width: 50, height: 50}} className="btn btn-danger" title href="/return/2510/1288" data-original-title="Return"><i className="fa fa-reply" /></a>
                        </td>
                      </tr>
                      <tr />
                      <tr />
                      <tr>
                        <td className="table-serial">
                          <h6>10</h6>
                        </td>
                        <td className="table-image">
                          <img src="https://vsmart.ajspire.com/uploads/product_image/1653459702.jpg" alt="product" style={{width: 100, height: 100}} />
                        </td>
                        <td className="table-name">
                          <h6>Dettol Original Gattu Rs150</h6>
                        </td>
                        <td className="table-price">
                          <h6>₹148.00<small>/Nos</small>
                          </h6>
                        </td>
                        <td className="table-brand">
                          <h6>Reckitt Benckiser </h6>
                        </td>
                        <td className="table-quantity">
                          <h6>2.00</h6>
                        </td><td>
                          <a style={{width: 50, height: 50}} className="btn btn-danger" title href="/return/2511/948" data-original-title="Return"><i className="fa fa-reply" /></a>
                        </td>
                      </tr>
                      <tr />
                      <tr />
                      <tr>
                        <td className="table-serial">
                          <h6>102</h6>
                        </td>
                        <td className="table-image">
                          <img src="https://vsmart.ajspire.com/uploads/product_image/1657521982.jpg" alt="product" style={{width: 100, height: 100}} />
                        </td>
                        <td className="table-name">
                          <h6>20-20 Cashew Cookies 5Rs</h6>
                        </td>
                        <td className="table-price">
                          <h6>₹5.00<small>/Nos</small>
                          </h6>
                        </td>
                        <td className="table-brand">
                          <h6>Parle</h6>
                        </td>
                        <td className="table-quantity">
                          <h6>2.00</h6>
                        </td><td>
                          <a style={{width: 50, height: 50}} className="btn btn-danger" title href="/return/73061/1433" data-original-title="Return"><i className="fa fa-reply" /></a>
                        </td>
                      </tr>
                      <tr />
                      <tr />
                      <tr>
                        <td className="table-serial">
                          <h6>103</h6>
                        </td>
                        <td className="table-image">
                          <img src="https://vsmart.ajspire.com/uploads/product_image/1663823658.jpg" alt="product" style={{width: 100, height: 100}} />
                        </td>
                        <td className="table-name">
                          <h6>3D Talan 200gm</h6>
                        </td>
                        <td className="table-price">
                          <h6>₹20.00<small>/Nos</small>
                          </h6>
                        </td>
                        <td className="table-brand">
                          <h6>General</h6>
                        </td>
                        <td className="table-quantity">
                          <h6>1.00</h6>
                        </td><td>
                          <a style={{width: 50, height: 50}} className="btn btn-danger" title href="/return/73062/2022" data-original-title="Return"><i className="fa fa-reply" /></a>
                        </td>
                      </tr>
                      <tr />
                      <tr />
                      <tr>
                        <td className="table-serial">
                          <h6>104</h6>
                        </td>
                        <td className="table-image">
                          <img src="https://vsmart.ajspire.com/uploads/product_image/1653212391.webp" alt="product" style={{width: 100, height: 100}} />
                        </td>
                        <td className="table-name">
                          <h6>555 (5T) Jhadu</h6>
                        </td>
                        <td className="table-price">
                          <h6>₹155.00<small>/Nos</small>
                          </h6>
                        </td>
                        <td className="table-brand">
                          <h6>Raymond Consumer care</h6>
                        </td>
                        <td className="table-quantity">
                          <h6>3.00</h6>
                        </td><td>
                          <a style={{width: 50, height: 50}} className="btn btn-danger" title href="/return/73063/988" data-original-title="Return"><i className="fa fa-reply" /></a>
                        </td>
                      </tr>
                      <tr />
                      <tr />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default MyOrder
