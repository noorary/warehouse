import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

import Product from './components/Products'
import productService from './services/products'

const App = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    productService.getAll('gloves')
    .then(prod => {
      setProducts(prod)
    })
  }, [])

  const handleButtonClick = (product) => {
    productService.getAll(product)
    .then(prod => {
      setProducts(prod)
    })
  }


  return (
    <div>
      <div>
        <h1><b>Welcome to warehouse-web app</b></h1>
      </div>
      <div>
        <Button variant="primary" onClick={() => handleButtonClick('gloves')}>Gloves</Button>{' '}
        <Button variant="primary" onClick={() => handleButtonClick('facemasks')}>Facemasks</Button>{' '}
        <Button variant="primary" onClick={() => handleButtonClick('beanies')}>Beanies</Button>{' '} 
        <p></p>
        <Product products={products} />
      </div>
    </div>
  ) 

}

export default App;
