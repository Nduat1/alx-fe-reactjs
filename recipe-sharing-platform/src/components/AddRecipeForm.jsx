import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Directly use e.target.name and e.target.value
    });
  };

  // Validate form
  const validateForm = () => {
    const validationErrors = {};
    if (!formData.title.trim()) {
      validationErrors.title = "Recipe title is required.";
    }
    if (!formData.ingredients.trim() || formData.ingredients.split("\n").length < 2) {
      validationErrors.ingredients =
        "Ingredients are required, and there must be at least two items.";
    }
    if (!formData.steps.trim()) {
      validationErrors.steps = "Preparation steps are required.";
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Submitted Recipe:", formData);
      setFormData({ title: "", ingredients: "", steps: "" });
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
    >
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Recipe Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleInputChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
            errors.title ? "border-red-500" : ""
          }`}
          placeholder="Enter recipe title"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
          Ingredients (separate by new lines)
        </label>
        <textarea
          name="ingredients"
          id="ingredients"
          rows="5"
          value={formData.ingredients}
          onChange={handleInputChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
            errors.ingredients ? "border-red-500" : ""
          }`}
          placeholder="Enter each ingredient on a new line"
        />
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>

      <div>
        <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
          Preparation Steps
        </label>
        <textarea
          name="steps"
          id="steps"
          rows="5"
          value={formData.steps}
          onChange={handleInputChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
            errors.steps ? "border-red-500" : ""
          }`}
          placeholder="Enter preparation steps"
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </div>
    </form>
  );
};

export default AddRecipeForm;
