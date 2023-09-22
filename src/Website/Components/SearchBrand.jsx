
import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Auth from '../Authantication/Auth';

const Searchbrand = () => {
    const {http,token}=Auth();
    const [product,setProduct] = useState([])
   const location = useLocation();
   const [searchParams] =  useSearchParams(location.search);
   const q = searchParams.get('q') ;
   const filterdata =product.filter(record=>record.english_name.toLowerCase().includes(q.toLowerCase()));

  console.log(filterdata);

  const getproduct =()=>{
    http.get(`/products`).then((response)=>{
        setProduct(response.data.products.data);
    }
    ).catch((error)=>{
        console.log(error);
    })
  }
  useEffect(()=>{
getproduct();
  },[]);
  


   
  return (
    <div>
    <div class="products-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="title-all text-center">
                        <h1>Search Product</h1>
                    </div>
                </div>
            </div>
         

            <div class="row special-list">
            { filterdata.map((product=>
                <div class="col-lg-3 col-md-6 special-grid best-seller">
                    <div class="products-single fix">
                        <div class="box-img-hover">
                            
                           
                            <div class="type-lb">
                                <p class="sale">{product.mrp_price -product.sale_price}rs off</p>
                            </div>
                            <img src={product.product_image} class="img-fluid" alt="Image" style={{maxHeight:150}}/>
                            <div class="mask-icon">
                                <ul>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                                </ul>
                               {token ? ( <button onClick={() => addToCart(product.product_id)}  >Add to Cart</button>):(
                                <Link to={'/login'}>Add to Cart</Link>
                               )}
                            </div>

                        </div>
                        <div class="why-text">
                            <h4>{product.english_name}</h4>
                            <h5>{product.mrp_price}</h5>
                        </div>
                        
                    </div>
                </div>
                 ))
}
            </div>
            </div>
            </div>
    </div>
  );
};

export default Searchbrand;




























// import React, { useState, useEffect } from 'react';
// import { useLocation, useSearchParams } from 'react-router-dom';
// import AuthUser from '../Authantication/AuthUser';

// // Corrected the import path and typo

// const SearchBrand = () => {
//     const { http, token } = AuthUser();
//     const [product, setProduct] = useState([]);
//     const location = useLocation();
//     const [searchParams] = useSearchParams(location.search);
//     const q = searchParams.get('q');
//     // const filterData = product.filter(record =>
//     //     record.english_name.toLowerCase().includes(q.toLowerCase())
//     // );
//     const filterData = q
//     ? product.filter(record =>
//         record.english_name.toLowerCase().includes(q.toLowerCase())
//       )
//     : [];
//     console.log(filterData);

//     const getProducts = () => {
//         http.get('/products')
//             .then((response) => {
//                 console.log(response.data);
//                 setProduct(response.data.products.data);
//             })
//             .catch((error) => {
//                 console.error(error); // Changed to console.error for errors
//             });
//     };

//     useEffect(() => {
//         getProducts();
//     }, []);
//     return(
// <div>
//             <div className="products-box"> {/* Corrected class to className */}
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="title-all text-center">
//                                 <h1>Search Product</h1> {/* Capitalized "Search Product" */}
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row special-list">
//                         {filterData.map((product) => (
//                             <div className="col-lg-3 col-md-6 special-grid best-seller" key={product.product_id}>
//                                 <div className="products-card fix">
//                                     <div className="product-media box-img-hover">
//                                         <div className="type-lb">
//                                             <p className="product-price">{product.mrp_price - product.sale_price}rs off</p>
//                                         </div>
//                                         <img src={product.product_image} className="img-fluid" alt="Image" style={{ maxHeight: 150 }} />
//                                         <div className="mask-icon">
//                                             <ul>
//                                                 <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
//                                                 <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
//                                                 <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                     <div className="why-text">
//                                         <h4>{product.english_name}</h4>
//                                         <h5>{product.mrp_price}</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
    



//         );
// };

// export default SearchBrand;
