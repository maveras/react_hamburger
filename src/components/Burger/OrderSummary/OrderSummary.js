import React, { Fragment } from 'react'
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
                            .map((igKey) => {
                              return <li key={igKey}><span style={{textTransform : 'capitalize'}} >{igKey}</span> : {props.ingredients[igKey]}</li>
                            })
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicius burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <span>Total price: {props.totalPrice}</span>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.cancelPurchase}>CANCEL</Button>
      <Button btnType="Success" clicked={props.continuePurchase}>CONTINUE</Button>
    </Fragment>
  )
}

export default orderSummary