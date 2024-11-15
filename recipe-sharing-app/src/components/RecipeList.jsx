import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link> {/* Link to recipe details */}
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
