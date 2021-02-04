import React from 'react'

import Table from 'react-bootstrap/Table'
import Pagination from "react-bootstrap/Pagination"

const Product = ({ products }) => {

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Color</th>
          <th>Price</th>
          <th>Manufacturer</th>
        </tr>
      </thead>
      <tbody>
        {products.map(p =>
          <tr key={p.id}>
            <td>{p.type}</td>
            <td>{p.name}</td>
            <td>{p.color[0]}</td>
            <td>{p.price}</td>
            <td>{p.manufacturer}</td>
          </tr>)}
      </tbody>
    </Table>
  )
}

export default Product