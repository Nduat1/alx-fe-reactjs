import create from 'zustand';

const useRecipeStore = create((set) => ({
  // Recipe data
  recipes: [
    { id: '1', title: 'Spaghetti Bolognese', description: 'Classic Italian pasta.', category: 'Dinner' },
    { id: '2', title: 'Pancakes', description: 'Fluffy breakfast treat.', category: 'Breakfast' },
    // Additional recipes can be added here
  ],
  filteredRecipes: [], // Array to store recipes filtered by search term
  favorites: [], // Array for favorite recipe IDs
  recommendations: [], // Array for personalized recommendations
  searchTerm: '', // Current search term entered by the user

  // Action: Set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action: Filter recipes based on the search term
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Action: Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe].filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Action: Set recipes (useful for loading initial data)
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  // Action: Add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites // Avoid duplicates
        : [...state.favorites, recipeId],
    })),

  // Action: Remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Action: Generate recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5 // Mock logic
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
