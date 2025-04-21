import { recipes } from './data'; // 👈 updated import
import RecipeContainer from './components/RecipeContainer';
import './App.css'

  function App() {
    return (
      <div>
        <h1 style={{ textAlign: 'center'}}>Recipes</h1>
        <RecipeContainer recipes={recipes} />
      </div>
    );
  }

export default App
