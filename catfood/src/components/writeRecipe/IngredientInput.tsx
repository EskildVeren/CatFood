import React, { useState } from "react";
import { PlusSquare, XSquare } from "lucide-react";

function IngredientInput() {
  const [ingredientInputs, setIngredientInput] = useState([0]);

  function addIngredient() {
    setIngredientInput(() => [
      ...ingredientInputs,
      Math.max(...ingredientInputs) + 1,
    ]);
  }
  function removeIngredientInput(id: number) {
    setIngredientInput(
      ingredientInputs.filter((ingredientInput) => ingredientInput != id)
    );
  }

  return (
    <label>
      IngredientInput
      {ingredientInputs.map((inputId) => (
        <IngredientListItem id={inputId} removeInput={removeIngredientInput} />
      ))}
      <PlusSquare color="#54e357" onClick={() => addIngredient()} />
    </label>
  );
}

function IngredientListItem(listItem: {
  id: number;
  removeInput: (id: number) => void;
}) {
  return (
    <label className="ingredientInput">
      <input className="amountInput" />
      <input className="unitInput" />{" "}
      {/* Make into hamburger meny for safety */}
      <input className="foodInput" />
      <XSquare
        color="#EF4040"
        onClick={() => listItem.removeInput(listItem.id)}
      />
    </label>
  );
}

export default IngredientInput;
