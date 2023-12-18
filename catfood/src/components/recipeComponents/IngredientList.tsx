import React from "react";
import { ingredient } from "../../types/ingredient";

function IngredientList(props: { ingredients: ingredient[] }) {
  return (
    <ul>
      <li>200g mel</li>
      <li>400ml vann</li>
      <li>1pk gjær</li>
      <li>100g ost</li>
      <li>400g hakkede tomater</li>
    </ul>
  );
}

export default IngredientList;
