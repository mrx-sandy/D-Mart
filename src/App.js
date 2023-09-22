import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Website/MainComponents/Home';
import Master from './Website/Layout/Master';
import Sidebar from './Website/Components/Sidebar';
import Login from './Website/Authantication/Login';
import Register from './Website/Authantication/Register';
import Shop from './Website/Components/Shop';
import ContactUs from './Website/Components/ContactUs';
import MyCart from './Website/Components/MyCart';
import Products from './Website/Components/Products.jsx';
import Wishlist from './Website/Components/Wishlist';
import Checkout from './Website/Components/Checkout';
import About from './Website/Components/About';
import MyOrder from './Website/Components/MyOrder';
import ProductSearch from './Website/Components/ProductSearch';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master Rcf={Home}/>} />

        <Route path="/sidebar" element={<Master Rcf={Sidebar}/>} />
        <Route path='/login'  element={<Login />}/> 
        <Route path='/register' element={<Register/>  }/>  
        <Route path="/shop" element={<Master Rcf={Shop}/>} />
        <Route path="/contactus" element={<Master Rcf={ContactUs}/>} />
        <Route path="/mycart" element={<Master Rcf={MyCart}/>} />
        <Route path="/products" element={<Master Rcf={Products}/>} />
        <Route path="/wishlist" element={<Master Rcf={Wishlist}/>} />
        <Route path="/checkout" element={<Master Rcf={Checkout}/>} />
        <Route path="/about" element={<Master Rcf={About}/>}/>
        <Route path="/myorder" element={<Master Rcf={MyOrder}/>}/>
        <Route path="/productsearch" element={<Master Rcf={ProductSearch}/>}/>














      </Routes>
    </BrowserRouter>
  
    )
}

export default App;
