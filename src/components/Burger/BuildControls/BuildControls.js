import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const controls = [
  { label: 'Salad', type: 'type'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Chesse', type: 'chesse'},
  { label: 'Meat', type: 'meat'},
]

const buildControls = (props) => (
  <div className={classes.buildControls}>
    {
      controls.map((ctrl) => {
        return <BuildControl key={ctrl.label} label={ctrl.label}></BuildControl>
      })
    }
  </div>
)
export default buildControls