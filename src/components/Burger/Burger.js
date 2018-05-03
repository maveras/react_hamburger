import React from 'react'
import classes from './Burger.css'
import BurgerIngridient from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngridient type='bread-top'></BurgerIngridient>
      <BurgerIngridient type='cheese'></BurgerIngridient>
      <BurgerIngridient type='meat'></BurgerIngridient>
      <BurgerIngridient type='bread-bottom'></BurgerIngridient>
    </div>
  )
}

export default burger