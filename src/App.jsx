import React, { useState, useEffect } from "react";
import { StateContext } from "./context/StateContext";
import Home from "./pages/home";
import { Layout } from "./components";
import { Toaster } from "react-hot-toast";
import "./styles/globals.css";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/product/[slug]";
import { client } from "./lib/client";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsQuery = '*[_type == "product"]';
      const fetchedProducts = await client.fetch(productsQuery);
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product/:slug"
            element={<ProductDetails products={products} />}
          />
        </Routes>
      </Layout>
    </StateContext>
  );
};

export default App;
