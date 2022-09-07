import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import About from './About';
import Products from './Products'
import CreateNewProductForm from './CreateNewProductForm';
import './style.css'
import HomePageContent from './HomePageContent';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomePageContent/> }/>
          <Route path="products" element={<Products />} >
            <Route index element={<p>Select a product for more details</p>}/>
            <Route path="new" element={<CreateNewProductForm />} />
            <Route path=":productId/edit" element={<CreateNewProductForm />} />
            <Route path=":productId" element={<Products />} />
            <Route path="*" element={<h1>Product Not Found</h1>} />
          </Route>
          <Route path="About" element={<About />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

