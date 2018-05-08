import React, {Component, Fragment} from 'react'
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls/BuildControls'
const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.9
}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      chesse: 1,
      meat: 1
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
    const priceAddition = INGREDIENTS_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({
      totalPrice: newPrice, ingredients: updatedIngredients
    })
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount - 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceDiscount = INGREDIENTS_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDiscount
    this.setState({
      totalPrice: newPrice, ingredients: updatedIngredients
    })
  }
  render () {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler}></BuildControls>
      </Fragment>
    )
  }
}

export default BurgerBuilder