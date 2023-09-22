import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Auth from '../Authantication/Auth';

const Wishlist = () => {
    const {http,token}=Auth();
    const [ourpro,setourpro]= useState([]);
    const [wishlist ,setWishlist]=useState([]);
    const [WishId ,SetWishId]=useState([]);


    fetch("https://vsmart.ajspire.com/api/products").then(
      response => {
          return response.json();
      }
  ).then(
      data => {
          setourpro(data.products.data)
      }
  )



  const addToCart = (product_id) => {
    http.post(`/add-to-cart/${product_id}`)
      .then(response => {
        console.log('Product added to cart:', response.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error adding product to cart:', error);
      });
  };




  const getWishlistItems = () => {
    http.get('/get-wishlist')
      .then((response) => {
        console.log(response.data);
       setWishlist(response.data.wishlist);
      })
      .catch((error) => {
        console.error('Error fetching wishlist items:', error);
      });
  };




const removeWishlist=(wishlistNumber)=>{
   http.get(`/remove-from-wishlist/${wishlistNumber}`).then((response)=>
   {
    console.log(response.data);
    SetWishId(wishlistNumber)
    alert('product remove from wishlist successfully')

   }).catch((error)=>{
    console.error('Error removing product remove from wishlist',error)
   })
};

  useEffect(()=>{
   getWishlistItems();
  },[token],WishId)


  return (
    <div style={{marginTop:"300px"}}> <div className="all-title-box">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h2>Wishlist</h2>
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Wishlist</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div className="wishlist-box-main" style={{border:'5px'}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="table-main table-responsive">
                    <table className="table">
                        <thead classNameName="bg-dark text-dark">
                            <tr>
                                <th style={{ color: 'white', background: 'black' }}>Images</th>
                                <th style={{ color: 'white', background: 'black' }}>Product Name</th>
                                <th style={{ color: 'white', background: 'black' }}>Unit Price </th>
                                <th style={{ color: 'white', background: 'black' }}>Stock</th>
                                <th style={{ color: 'white', background: 'black' }}>Add Item</th>
                                <th style={{ color: 'white', background: 'black' }}>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                        { wishlist .map((el)=>(
                            <tr>
                                
                                <td className="thumbnail-img">
                                    <a href="#">
                                <img className="img-fluid" src={`https://vsmart.ajspire.com/uploads/product_image/${el.product_image}`} alt="" />
                            </a>
                                </td>
                                <td className="name-pr">
                                    <a href="#">
                                    {el.english_name}
                            </a>
                                </td>
                                <td className="price-pr">
                                    <p>{el.mrp_price}</p>
                                </td>
                                <td className="quantity-box">In Stock</td>
                                <td className="add-pr">
                                {token ? ( <button style={{ color: 'white', background: 'black',borderRadius:'5px',height:'50px' }} onClick={() => addToCart(el.product_id)}  > Add to Cart </button>):(
                                <Link to={'/login'}>Add to Cart</Link>
                               )}
                                </td>
                                <td className="remove-pr">
                                    <a href="#">
                                    <button style={{ color: 'white', background: 'red',borderRadius:'5px',height:'50px'}} classNameName="btn btn-danger py-2 px-4"onClick={() =>removeWishlist(el.wishe_id)}>Remove</button>
                            </a>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Wishlist