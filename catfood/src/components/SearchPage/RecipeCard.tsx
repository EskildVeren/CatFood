import React from 'react'
import { Link } from 'react-router-dom'

function RecipeCard(props: {imageLink: string, recipeName: string}) {
  return (
    <Link to="/">
        <img src={props.imageLink}></img>
        <h3>{props.recipeName}</h3>
    </Link>
  )
}

export default RecipeCard