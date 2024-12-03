import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe matching the ID
    const selectedRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p>Loading recipe details...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-4">{recipe.summary}</p>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside">
          {/* Example ingredients, replace with actual data */}
          <li>200g spaghetti</li>
          <li>100g bacon</li>
          <li>2 eggs</li>
          <li>50g Parmesan cheese</li>
          <li>Black pepper</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
        <ol className="list-decimal list-inside">
          {/* Example instructions, replace with actual data */}
          <li>Boil spaghetti until al dente.</li>
          <li>Fry the bacon until crispy.</li>
          <li>Mix eggs and Parmesan cheese in a bowl.</li>
          <li>Toss spaghetti with bacon and egg mixture.</li>
          <li>Season with black pepper and serve.</li>
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
