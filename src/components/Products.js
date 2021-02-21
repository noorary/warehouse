import React from 'react'

import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'

const Product = ({ products }) => {

  function stockFormatter(cell, row) {
    if (row.instock === 'INSTOCK') {
      return (
        <span>
          <strong style={ { color: 'green' } }>$ { cell }</strong>
        </span>
      )
    }
  
    return (
      <span>$ { cell } </span>
    );
  }

  const columns = [
    { dataField: 'type', text: 'Type' },
    { dataField: 'name', text: 'Name' },
    { dataField: 'color', text: 'Color' },
    { dataField: 'price', text: 'Price' },
    { dataField: 'manufacturer', text: 'Manufacturer' },
    { dataField: 'instock', text: 'In stock'}
  ]

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 10,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }
  });

  return (
    <div className="productTable">
      <BootstrapTable pagination={pagination} keyField='id' data={products} columns={columns} />
    </div>
  )
}

export default Product