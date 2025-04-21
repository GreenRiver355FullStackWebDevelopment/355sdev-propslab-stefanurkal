function Recipe(props) {
    return (
      <div className="recipeCard">
        <h2>{props.recipe.name}</h2>
  
        <h4>Ingredients:</h4>
        <ul>
          {props.recipe.ingredients.map((item, index) => (
            <li key={index}>
              <input type="checkbox" id={`${props.recipe.name}-ing-${index}`} />
              <label htmlFor={`${props.recipe.name}-ing-${index}`}> {item}</label>
            </li>
          ))}
        </ul>
  
        <h4>Instructions:</h4>
        <ol>
          {props.recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    );
  }
  
  export default Recipe;