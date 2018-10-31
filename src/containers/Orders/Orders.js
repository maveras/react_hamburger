import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from 'axios'
import Spinner from '../../components/UI/Spinner/Spinner'
import ErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }
  componentDidMount () {
    axios.get('https://react-hamburger-89ecb.firebaseio.com/orders.json')
      .then(res => {
        let recieveOrders = []
        for (let key in res.data) {
          recieveOrders.push(
            {
              id: key,
              ...res.data[key]
            }
          )
        }
        this.setState({loading: false, orders: recieveOrders})
      })
  }
  render () {
    return (
       this.state.loading ? <Spinner/> : <Order />
    )
  }
}
export default ErrorHandler(Orders, axios)
