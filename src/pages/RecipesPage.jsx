import React, { useState, useEffect } from 'react';
import Layout from '../layouts/Layout';
import RecipeCard from '../components/Recipe/RecipeCard';
import MockRecipeService from '../services/RecipeService'

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchedRecipes = MockRecipeService.getRecipes();
        setRecipes(fetchedRecipes);
    }, []);

    return (
        <Layout>
            <div className="container mt-4">
                {/* For small screens: padding 3, for medium and larger: padding 0 */}
                <div className="row p-3 p-md-0">
                    {recipes.map((recipe, index) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Recipes;