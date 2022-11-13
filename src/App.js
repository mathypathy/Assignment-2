import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import HomeView from "./Views/HomeView.js";
import ContactsView from "./Views/ContactsView.js";
import ProductView from "./Views/ProductView.js";
import SearchView from "./Views/SearchView.js";
import CompareView from "./Views/CompareView.js";
import WishlistView from "./Views/WishlistView.js";
import ShoppingCartView from "./Views/ShoppingCartView.js";
import NotFoundView from "./Views/NotFoundView.js";
import ProductDetailView from "./Views/ProductDetailView.js";
import {ProductContext} from '../src/Context/contexts'


function App() {

  const [products, setProducts,] = useState([])

  useEffect (() =>{
    const fetchData = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchData();
  }, [])


  return (
    <>
      <BrowserRouter>
        <ProductContext.Provider value={products}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/Products" element={<ProductView />} />
          <Route path="/Products/:id" element={<ProductDetailView />} />
          <Route path="/Search" element={<SearchView />} />
          <Route path="/Compare" element={<CompareView />} />
          <Route path="/Wishlist" element={<WishlistView />} />
          <Route path="/ShoppingCart" element={<ShoppingCartView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
        </ProductContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
