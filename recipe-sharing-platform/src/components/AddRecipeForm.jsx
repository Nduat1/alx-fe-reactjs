import React, { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const handleChange = (e) => {
    // Ensure target is defined and accessible
    const { name, value } = e.target;

    // Update the state for the corresponding field
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation: check for empty fields
    if (!formData.title || !formData.ingredients || !formData.steps) {
      alert("All fields are required!");
      return;
    }

    // Create a new recipe object with a unique ID
    const newRecipe = {
      id: Date.now(), // Generate unique ID
      title: formData.title,
      ingredients: formData.ingredients.split(","), // Convert to an array
      steps: formData.steps,
    };

    // Pass the new recipe to the parent component
    onAddRecipe(newRecipe);

    // Reset the form
    setFormData({
      title: "",
      ingredients: "",
      steps: "",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-medium mb-1">
            Recipe Title:
          </label>
          <input
            type="text"
            id="title"
            name="title" // Ensure this matches the state key
            value={formData.title}
            onChange={handleChange} // Correct event listener
            className="w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter recipe title"
          />
        </div>

        <div>
          <label htmlFor="ingredients" className="block font-medium mb-1">
            Ingredients:
          </label>
          <textarea
            id="ingredients"
            name="ingredients" // Ensure this matches the state key
            value={formData.ingredients}
            onChange={handleChange} // Correct event listener
            className="w-full border-gray-300 rounded-md shadow-sm"
            placeholder="List ingredients (comma-separated)"
          />
        </div>

        <div>
          <label htmlFor="steps" className="block font-medium mb-1">
            Preparation Steps:
          </label>
          <textarea
            id="steps"
            name="steps" // Ensure this matches the state key
            value={formData.steps}
            onChange={handleChange} // Correct event listener
            className="w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Describe the preparation steps"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
