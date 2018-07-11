import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-hamburger-89ecb.firebaseio.com/'
})

export default instance