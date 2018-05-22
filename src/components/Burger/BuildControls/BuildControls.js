import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Chesse', type: 'chesse'},
  { label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (
  <div className={classes.buildControls}>
    <div>Current price <strong>{props.price.toFixed(2)}</strong></div>
    {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}>
        </BuildControl>
    ))}
    <button
      onClick={props.orderer}
      className={classes.OrderButton}
      disabled={!props.purchasable}>ORDER NOW</button>
  </div>
)
export default buildControls