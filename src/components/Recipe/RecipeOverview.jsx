import React from 'react';
import './RecipeOverview.css';

const RecipesOverview = ({ currentPage, totalRecipes, recipesPerPage }) => {
    const startIndex = (currentPage - 1) * recipesPerPage + 1;
    const endIndex = Math.min(startIndex + recipesPerPage - 1, totalRecipes);

    return (
        <div className="recipes-overview">
            <p>Prikazano {startIndex} - {endIndex} od {totalRecipes} recepata</p>
        </div>
    );
};

export default RecipesOverview;