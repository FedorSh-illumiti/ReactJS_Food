import axios, { Axios } from "axios";


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer Mp_LKRCtB6KQbrMdBhjxsGfaX9K36dMqGdkrR60RBD9eBikT6E1vaBXc_QVefc89OIO5sg4FbFzGH4nbUR5J_skn0ZnlV-VE41vOBzKGPmxT6bN4E6g6BUCL0zaSYXYx'
    }
})