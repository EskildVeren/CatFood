import React from 'react'
import { PlusSquare, XSquare  } from 'lucide-react';


function IngredientInput() {
  return (
    <label>
        IngredientInput
        <IngredientListItem/>
    </label>
  )
}

function IngredientListItem() {
    return (
      <label className='ingredientInput'>
        <input className='amountInput'/>
        <input className='unitInput'/> {/* Make into hamburger meny for safety */}
        <input className='foodInput'/>
        <PlusSquare color="#54e357"/>
        <XSquare color='#EF4040'/>
      </label>
    )
}

export default IngredientInput