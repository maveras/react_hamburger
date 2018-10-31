import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import { Route } from 'react-router-dom'
class Orders extends Component {
  state = {
    orders: [
      {
        ingredients: {
          salad: 1,
          tomate: 0
        }
      }
    ]
  }
  render () {
    return (
      <Order/>
    )
  }
}
export default Orders