import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Layout from '../layouts/Layout';
import RecipeCard from '../components/Recipe/RecipeCard';
import MockRecipeService from '../services/RecipeService';
import RecipesOverview from '../components/Recipe/RecipeOverview'; // Import the new component
import './Pagination.css';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const currentPage = parseInt(searchParams.get('page')) || 1;

    useEffect(() => {
        const fetchedRecipes = MockRecipeService.getRecipes();
        setRecipes(fetchedRecipes);
    }, []);

    const indexOfLastRecipe = currentPage * MockRecipeService.getRecipesPerPage();
    const indexOfFirstRecipe = indexOfLastRecipe - MockRecipeService.getRecipesPerPage();
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const totalPages = Math.ceil(recipes.length / MockRecipeService.getRecipesPerPage());

    const paginate = (pageNumber) => {
        // Immediately scroll to the top before navigating
        // window.scrollTo(0, 0);
        setSearchParams({ page: pageNumber });
        navigate(`/recepti?page=${pageNumber}`);
    };

    const paginationItems = [];

    paginationItems.push(
        <li key={1} className={`page-item ${currentPage === 1 ? 'active' : ''}`}>
            <button onClick={() => paginate(1)} className="page-link">
                1
            </button>
        </li>
    );

    if (currentPage > 4) {
        paginationItems.push(
            <li key="ellipsis1" className="page-item disabled">
                <span className="page-link">...</span>
            </li>
        );
    }

    for (let i = Math.max(2, currentPage - 2); i <= Math.min(totalPages - 1, currentPage + 2); i++) {
        paginationItems.push(
            <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                <button onClick={() => paginate(i)} className="page-link">
                    {i}
                </button>
            </li>
        );
    }

    if (currentPage < totalPages - 3) {
        paginationItems.push(
            <li key="ellipsis2" className="page-item disabled">
                <span className="page-link">...</span>
            </li>
        );
    }

    if (totalPages > 1) {
        paginationItems.push(
            <li key={totalPages} className={`page-item ${currentPage === totalPages ? 'active' : ''}`}>
                <button onClick={() => paginate(totalPages)} className="page-link">
                    {totalPages}
                </button>
            </li>
        );
    }

    return (
        <Layout>
            <div className="container mt-4 mb-4">
                {/* Display the RecipesOverview */}
                <RecipesOverview
                    currentPage={currentPage}
                    totalRecipes={MockRecipeService.getTotalRecipes()}
                    recipesPerPage={MockRecipeService.getRecipesPerPage()}
                />

                <div className="row p-3 p-md-0 mt-2">
                    {currentRecipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>

                {/* Pagination Controls */}
                <nav>
                    <ul className="pagination justify-content-center">
                        {paginationItems}
                    </ul>
                </nav>
            </div>
        </Layout>
    );
};

export default Recipes;
