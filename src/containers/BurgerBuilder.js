import React, {Component, Fragment} from 'react'
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls/BuildControls'
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      chesse: 0,
      meat: 0
    },
    totalPrice: 4
  }
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
  }
  render () {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls></BuildControls>
      </Fragment>
    )
  }
}

export default BurgerBuilder