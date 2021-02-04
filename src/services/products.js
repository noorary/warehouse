import axios from 'axios'
const baseUrl = 'http://localhost:5000/products'

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