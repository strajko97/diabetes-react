import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeService from '../../services/RecipeService';
import './RecipeDetail.css';

const RecipeDetail = () => {
    const { id } = useParams();
    const recipe = RecipeService.getRecipeById(Number(id));

    if (!recipe) {
        return <div className="recipe-not-found">Recipe not found</div>;
    }

    return (
        <div className="recipe-detail container mt-4">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="image-container">
                        <img
                            src={recipe.imageUrl}
                            alt={recipe.title}
                            className="recipe-image"
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 recipe-info">
                    <h1 className="recipe-title">{recipe.title}</h1>
                    <div className="recipe-description">
                        <strong>Opis proizvoda:</strong>
                        <p>{recipe.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;
