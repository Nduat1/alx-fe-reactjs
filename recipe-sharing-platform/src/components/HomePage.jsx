import { useState, useEffect } from "react";

function HomePage() {
    const[recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("./data.json")
        .then((response) => response,json())
        .then((data) => setRecipes(data))
        .catch((error) => console.error("Error loading recipes:", error))
    }, []);

    return ( 
        <>
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Recipes</h1>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {recipes.map((recipe) => {
                        <div 
                            key={recipe.id} 
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <img 
                                src="recipe.image" 
                                alt="recipe.title" 
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                                <p className="text-gray-600 mt-2">{recipe.summary}</p>
                            </div>
                        </div>
                    })}
            </div>
            
        </div>
        
        </>
     );
}

export default HomePage;