import Recipe from "../Recipe/Recipe";
import "../../../stylesheets/Menu.css";

const Menu = ({ recipes }) => (
  <article>
    <header>
      <h1>Delicious Recipes</h1>
    </header>
    <div className="recipes">
      {recipes.map((recipe, index) => (
        <Recipe key={`recipe_${index}`} {...recipe} />
      ))}
    </div>
  </article>
);

export default Menu;
