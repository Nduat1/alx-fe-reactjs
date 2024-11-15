import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id))
  );
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    navigate('/'); // Redirects to the main page after deletion
  };

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <button onClick={handleDelete}>Delete Recipe</button>
      {/* Add Edit functionality here if needed */}
    </div>
  );
};

export default RecipeDetails;
