import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className="side on"><a href="https://www.free-css.com/free-css-templates" className="close-side"><i className="fa fa-times" /></a>
  <li className="cart-box">
    <ul className="cart-list">
      <li><a href="https://www.free-css.com/free-css-templates" className="photo"><img src="../assets/images/img-pro-01.jpg" className="cart-thumb" alt="website template image" /></a>
        <h6><a href="https://www.free-css.com/free-css-templates">Delica omtantur</a></h6>
        <p>1x - <span className="price">$80.00</span></p>
      </li>
      <li><a href="https://www.free-css.com/free-css-templates" className="photo"><img src="../assets/images/img-pro-02.jpg" className="cart-thumb" alt="website template image" /></a>
        <h6><a href="https://www.free-css.com/free-css-templates">Omnes ocurreret</a></h6>
        <p>1x - <span className="price">$60.00</span></p>
      </li>
      <li><a href="https://www.free-css.com/free-css-templates" className="photo"><img src="../assets/images/img-pro-03.jpg" className="cart-thumb" alt="website template image" /></a>
        <h6><a href="https://www.free-css.com/free-css-templates">Agam facilisis</a></h6>
        <p>1x - <span className="price">$40.00</span></p>
      </li>
      <li className="total"><a href="https://www.free-css.com/free-css-templates" className="btn btn-default hvr-hover btn-cart">VIEW CART</a><span className="float-right"><strong>Total</strong>: $180.00</span></li>
    </ul>
  </li>
</div>

    </div>
  )
}

export default Sidebar
