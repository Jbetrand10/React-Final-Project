import React, { createContext, useState, useEffect } from "react"
import axios from "axios"

export const ProductContext = createContext()

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      await refreshProducts()
    }
    getProducts()
  }, []);

  function refreshProducts() {
    return axios.get("http://localhost:3000/drumInventory")
      .then(response => {
        setProducts(response.data)
      })
  }

  function getProduct(id) {
    return axios.get(`http://localhost:3000/drumInventory/${id}`)
    .then(response =>
      new Promise((resolve) => resolve(response.data))
    )
    .catch((error) =>
      new Promise((_, reject) => reject(error.response.statusText))
    )
  }

  function deleteProduct(id) {
    axios.delete(`http://localhost:3000/drumInventory/${id}`)
    .then(refreshProducts)
  }

  function addProduct(product) {
    return axios.post("http://localhost:3000/drumInventory", product)
    .then(response => {
      refreshProducts()
      return new Promise((resolve) => resolve(response.data))
    })
  }

  function updateProduct(product) {
    return axios.put(`http://localhost:3000/drumInventory/${product.id}`, product)
    .then(response => {
        refreshProducts()
        return new Promise((resolve) => resolve(response.data))
    })
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        getProduct,
        deleteProduct,
        addProduct,
        updateProduct
      }}
    >
      {props.children}
    </ProductContext.Provider>
  )
}