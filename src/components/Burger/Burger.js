import React from 'react'
import classes from './Burger.css'
import BurgerIngridient from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])]
      .map((_, i) => {
        return <BurgerIngridient key={igKey + i} type={igKey}/>
      })
    })
    .reduce((arr, act) => {
      return arr.concat(act)
    }, [])
    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please add Ingredients</p>
    }
  return (
    <div className={classes.Burger}>
      <BurgerIngridient type='bread-top'></BurgerIngridient>
      {
        transformedIngredients
      }
      <BurgerIngridient type='bread-bottom'></BurgerIngridient>
      {/* <BurgerIngridient type='bread-top'></BurgerIngridient>
      <BurgerIngridient type='cheese'></BurgerIngridient>
      <BurgerIngridient type='meat'></BurgerIngridient>
      <BurgerIngridient type='bread-bottom'></BurgerIngridient> */}
    </div>
  )
}

export default burger