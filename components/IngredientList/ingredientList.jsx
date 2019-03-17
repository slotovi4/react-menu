import Ingredient from "../Ingredient/Ingredient";

const ingredientList = ({ list }) => (
  <ul className="Ingredients">
    {list.map((ingredient, index) => (
      <Ingredient key={`ingredient_${index}`} {...ingredient} />
    ))}
  </ul>
);

export default ingredientList;
