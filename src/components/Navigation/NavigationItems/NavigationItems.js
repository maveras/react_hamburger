import React from 'react'
import NavigationItem from './navigationItem/NavigationItem.js'
import classes from './NavigationItems.css'
const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active className={classes.NavigationItems}>Burger Builder</NavigationItem>
    <NavigationItem className={classes.NavigationItems}>Checkout</NavigationItem>
  </ul>
)

export default NavigationItems