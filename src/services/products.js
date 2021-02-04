import axios from 'axios'
const baseUrl = 'https://bad-api-assignment.reaktor.com/v2/products'

const getAll = async (product) => {

    try {
        const request = axios.get(`${baseUrl}/${product}`)
        const response = await request
        return response.data
    } catch (error) {
        console.log(error)
    }
    
}

export default { getAll }