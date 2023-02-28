import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MasterLayout from './component/layout/MasterLayout';
import About from './component/pages/about/About';
import Blog from './component/pages/blog/Blog';
import Cart from './component/pages/cart/Cart';
import Contact from './component/pages/contact/Contact';
import Detail from './component/pages/detail/Detail';
import Home from './component/pages/home/Home';
import Login from './component/pages/login/Login';
import Registers from './component/pages/register/Registers';
import Shop from './component/pages/shop/Shop';
import Shops from './component/pages/shop/shops/Shops';

function App() {
  return (
    <div>
     <Routes>
        <Route path='/' element={ <MasterLayout Page={<Home />}/>} />
        <Route path='/about' element={ <MasterLayout Page={<About />}/>} />
        <Route path='/shop' element={ <MasterLayout Page={<Shop />}/>} />
        <Route path='/shops/:id' element={ <MasterLayout Page={<Shops />}/>} />
        <Route path='/blog' element={ <MasterLayout Page={<Blog />}/>} />
        <Route path='/contact' element={ <MasterLayout Page={<Contact />}/>} />
        <Route path='/detail/:id' element={ <MasterLayout Page={<Detail />}/>} />
        <Route path='/cart' element={ <MasterLayout Page={<Cart />}/>} />
        <Route path='/registers' element={ <MasterLayout Page={<Registers />}/>} />
        <Route path='/login' element={ <MasterLayout Page={<Login />}/>} />
       
        
     </Routes>
    </div>
  );
}

export default App;
