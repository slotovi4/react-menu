import IngredientsList from "../IngredientList/ingredientList";
import Instructions from "../Instructions/Instructions";

const Recipe = ({ name, ingredients, steps }) => (
  <section id={name.toLoverCase().replace(/ /g, "-")}>
    <h1>{name}</h1>
    <IngredientsList list={ingredients} />
    <Instructions title="Cooking Instructions" steps={steps} />
  </section>
);

export default Recipe;
