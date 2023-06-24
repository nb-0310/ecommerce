import React, { useEffect, useState } from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsQuery = '*[_type == "product"]';
      const products = await client.fetch(productsQuery);
      setProducts(products);

      const bannerQuery = '*[_type == "banner"]';
      const banner = await client.fetch(bannerQuery);
      setBannerData(banner);
    };

    fetchData();
  }, []);

  return (
    <div>
      {bannerData && bannerData.length > 0 && (
        <HeroBanner heroBanner={bannerData[0]} />
      )}
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>There are many variations passages</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      {bannerData && bannerData.length > 0 && (
        <FooterBanner footerBanner={bannerData[0]} />
      )}
    </div>
  );
};

export default Home;
