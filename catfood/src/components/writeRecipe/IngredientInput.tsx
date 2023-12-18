import React, { useState } from "react";
import { PlusSquare, XSquare } from "lucide-react";

function IngredientInput(props: { register: any }) {
  const [ingredientInputs, setIngredientInput] = useState([0]);

  function addIngredient() {
    setIngredientInput((oldInputs) => [
      ...ingredientInputs,
      ingredientInputs.length,
    ]);
  }

  return (
    <label>
      IngredientInput
      {ingredientInputs.map(() => (
        <IngredientListItem />
      ))}
      <PlusSquare color="#54e357" onClick={() => addIngredient()} />
    </label>
  );
}

function IngredientListItem() {
  return (
    <label className="ingredientInput">
      <input className="amountInput" />
      <input className="unitInput" />{" "}
      {/* Make into hamburger meny for safety */}
      <input className="foodInput" />
      <XSquare color="#EF4040" />
    </label>
  );
}

export default IngredientInput;
