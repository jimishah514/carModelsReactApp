import * as axios from 'axios'
const BASE_URL = require('../config')

const getCarModels = async () => {
    const res = await axios.get(`${BASE_URL.apiPath}/api/carModels`)
    return res.data
}

export {
    getCarModels
}

