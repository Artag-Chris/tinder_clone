import axios from 'axios'
const instance = axios.create({
    baseURL: "https://tinder-inindustriable.herokuapp.com"
})

export default instance; 