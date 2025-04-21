import { recipes } from '../data.js';
import Recipe from "./Recipe.jsx";

function RecipeContainer() {
  return (
    <div className="recipeContainer">
      {recipes.map(recipe => <Recipe key={recipe.name} recipe={recipe} />
      )}
    </div>
  );
}

export default RecipeContainer;