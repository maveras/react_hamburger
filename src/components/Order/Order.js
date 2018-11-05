  import React from 'react'
  import classes from './Order.css'
  const order = (props) => {
    let ingredients = []
    for (let ingredientName in props.ingredients) {
      ingredients.push(
        {
          name: ingredientName,
          value: props.ingredients[ingredientName]
        }
      )
    }
    let ingredientMod = ingredients.map((ingredient, index) => <span style={{
      textTransform: 'capitalize',
      margin: '0 10px',
      display: 'inline-block',
      padding: '5px',
      border: '1px solid #ccc'
    }} key={index}>{ingredient.name} ({ingredient.value})</span>)
    console.log(ingredients)
    return (
      <div className={classes.Order}>
        <p >Ingredients: {ingredientMod}</p>
        <p>Price: <strong>USD ${Number.parseFloat(props.price).toFixed(2)}</strong></p>
      </div>
    )
  }
  export default order