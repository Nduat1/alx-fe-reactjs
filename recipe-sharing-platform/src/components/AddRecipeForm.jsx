import React, { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the specific field in the form data
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.ingredients || !formData.steps) {
      alert("Please fill out all fields.");
      return;
    }
    const newRecipe = {
      id: Date.now(), // Generate a unique ID
      ...formData,
    };
    onAddRecipe(newRecipe); // Pass the new recipe to the parent component
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
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter the recipe title"
          />
        </div>
        <div>
          <label htmlFor="ingredients" className="block font-medium mb-1">
            Ingredients:
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm"
            placeholder="List the ingredients (comma-separated)"
          />
        </div>
        <div>
          <label htmlFor="steps" className="block font-medium mb-1">
            Preparation Steps:
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
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
