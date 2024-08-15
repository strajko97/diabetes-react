import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeService from '../../services/RecipeService';
import Rating from './Rating';
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
                <div className="col-12">
                    <h1 className="recipe-title">{recipe.title}</h1>
                    <Rating value={recipe.rating} />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <div className="image-container">
                        <img
                            src={recipe.imageUrl}
                            alt={recipe.title}
                            className="recipe-detail-image img-fluid"
                        />
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <div className="recipe-detail-description">
                        <p>{recipe.description}</p>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <strong>Sastojci:</strong>
                    <div className="ingredient-clouds mt-2">
                        {recipe.ingredients.map((ingredient, index) => (
                            <span key={index} className="ingredient-cloud">
                                {ingredient.name} ({ingredient.quantity})
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;
