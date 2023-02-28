import React from "react";
import banner from '../../../img/banner.webp'
import className from "classnames/bind";
import style from './Home.module.css';
import { useEffect } from "react"
import ItemBanner from "./item-banner/ItemBanner";
import ProductPortfolio from "./product-portfolio/ProductPortfolio";
import Trending from "./trending/Trending";
import Blog from "./blog/Blog";
import Trademark from "./trademark/Trademark";

const cx = className.bind(style);

function Home() {
   useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

    return ( 
        <>
         <div className={cx('banner')}>
            <img src={banner}/>
         </div>
         <ItemBanner />
         <ProductPortfolio />
         <Trending />
         <Blog />
         <Trademark />
        </>
     );
}

export default Home;