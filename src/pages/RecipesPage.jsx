import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Layout from '../layouts/Layout';
import RecipeCard from '../components/Recipe/RecipeCard';
import MockRecipeService from '../services/RecipeService';
import RecipesOverview from '../components/Recipe/RecipeOverview';
import IngredientFilter from '../components/Recipe/IngredientFilter';
import './Pagination.css';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const currentPage = parseInt(searchParams.get('page')) || 1;
    const ingredientIds = searchParams.get('ingredient') ? searchParams.get('ingredient').split(',').map(Number) : [];

    useEffect(() => {
        const fetchedRecipes = MockRecipeService.getRecipes();
        setRecipes(fetchedRecipes);
        setFilteredRecipes(fetchedRecipes);
    }, []);

    useEffect(() => {
        if (ingredientIds.length) {
            const filtered = MockRecipeService.filterRecipesByIngredients(ingredientIds);
            setFilteredRecipes(filtered);
        } else {
            setFilteredRecipes(recipes);
        }
    }, [ingredientIds, recipes]);

    const indexOfLastRecipe = currentPage * MockRecipeService.getRecipesPerPage();
    const indexOfFirstRecipe = indexOfLastRecipe - MockRecipeService.getRecipesPerPage();
    const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const totalPages = Math.ceil(filteredRecipes.length / MockRecipeService.getRecipesPerPage());

    const paginate = (pageNumber) => {
        setSearchParams({ page: pageNumber, ingredient: ingredientIds.join(',') });
        navigate(`/recepti?page=${pageNumber}&ingredient=${ingredientIds.join(',')}`);
    };

    const handleFilter = (selectedIngredientIds) => {
        setSelectedIngredients(selectedIngredientIds);

        if (selectedIngredientIds.length > 0) {
            setSearchParams({ ingredient: selectedIngredientIds.join(','), page: 1 });
            navigate(`/recepti?ingredient=${selectedIngredientIds.join(',')}`);
        } else {
            setSearchParams({ page: 1 });
            navigate(`/recepti?page=1`);
        }
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
            <div className="container mt-4">
                <div className="row">
                    <RecipesOverview
                        currentPage={currentPage}
                        totalRecipes={filteredRecipes.length}
                        recipesPerPage={MockRecipeService.getRecipesPerPage()}
                    />
                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-12 mb-4">
                        <IngredientFilter onFilter={handleFilter} selectedIngredients={selectedIngredients} />
                    </div>
                    <div className="col-lg-10 col-md-12">

                        {filteredRecipes.length > 0 ? (
                            <div className="row p-3 p-md-0">
                                {currentRecipes.map((recipe) => (
                                    <RecipeCard key={recipe.id} recipe={recipe} />
                                ))}
                            </div>
                        ) : (
                            <div className="no-recipes-message">
                                <p>Nema dostupnih recepata sa izabranim sastojcima</p>
                            </div>
                        )}

                        {totalPages > 1 && filteredRecipes.length > 0 && (
                            <nav>
                                <ul className="pagination justify-content-center">
                                    {paginationItems}
                                </ul>
                            </nav>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Recipes; 
