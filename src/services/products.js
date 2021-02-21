/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = 'https://nr-warehouse-api.herokuapp.com/products'

const getAll = async (product) => {

  try {
    const request = axios.get(`${baseUrl}/${product}`)
    const response = await request
    console.log(response.data.products)
    return response.data.products
  } catch (error) {
    console.log(error)
  }

}

export default { getAll }