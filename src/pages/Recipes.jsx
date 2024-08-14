import React from 'react';
import Layout from '../layouts/Layout';
import RecipeCard from '../components/Recipe/RecipeCard';

const Recipes = () => {
    // Array of RecipeCard components
    const recipeCards = Array.from({ length: 20 }, (_, index) => (
        <RecipeCard key={index} />
    ));

    return (
        <Layout>
            <div className="container mt-4">
                {/*for small sreen to be 3 for larger tham medium 0}*/}
                <div className="row p-3 p-md-0">
                    {recipeCards}
                </div>
            </div>
        </Layout>
    );
}

export default Recipes;