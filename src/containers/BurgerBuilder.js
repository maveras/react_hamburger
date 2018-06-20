import React, {Component, Fragment} from 'react'
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls/BuildControls'
import Modal from '../components/UI/Modal/Modal'
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary'
const INGREDIENTS_PRICES = {
  salad: 0.5,
  bacon: 0.9,
  chesse: 0.4,
  meat: 1.3,
}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      chesse: 1,
      meat: 1
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(ingKey => {
        return ingredients[ingKey]
      })
      .reduce((sum, el) => {
        return sum + el
      },0)
    // const state = {...this.state}
    // console.log('la suma', sum)
    // state.purchasable = sum > 0
    this.setState({
      purchasable: sum > 0
    })
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    })
  }
  purchaseCancel = () => {
    this.setState({
      purchasing: false
    })
  }
  purchaseContinue = () => {
    alert('continue men')
  }

  purchaseCancel = () => {
    alert('cancel men')
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
    this.updatePurchaseState(updatedIngredients)

  }
  disabledButton = (ingredient) => {
    let disabledInfo = {...this.state.ingredients}
      for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
      }
      return disabledInfo[ingredient]
    }
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    if (oldCount < 0) {
      return
    }
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
    this.updatePurchaseState(updatedIngredients)
  }
  render () {
    const disabledInfo = { ...this.state.ingredients }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          orderer={this.purchaseHandler}
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          order={this.updatePurchaseState}
          purchasable={this.state.purchasable}>
        </BuildControls>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancel}>
          <OrderSummary totalPrice={this.state.totalPrice}cancelPurchase={this.purchaseCancel} continuePurchase={this.purchaseContinue} ingredients={this.state.ingredients}></OrderSummary>
        </Modal>
      </Fragment>
    )
  }
}

export default BurgerBuilder