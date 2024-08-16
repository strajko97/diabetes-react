import React from 'react';
import { useParams } from 'react-router-dom';
import MockRecipeService from '../services/RecipeService';
import Rating from '../components/Recipe/Rating';
import './RecipeDetail.css';
import Layout from '../layouts/Layout';

const RecipeDetail = () => {
    const { id } = useParams();
    const recipe = MockRecipeService.getRecipeById(Number(id));

    if (!recipe) {
        return <div className="recipe-not-found">Recipe not found</div>;
    }

    return (
        <Layout>
            <div className="recipe-detail container mt-4">
                {/* Title and Rating */}
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h1 className="recipe-title">{recipe.title}</h1>

                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className='col-lg-10 text-center'>
                        <Rating value={recipe.rating} />
                    </div>
                </div>

                {/* Image, Ingredients and Description */}
                <div className="row justify-content-center mt-4">
                    <div className="col-lg-6 col-md-12 col-xs-12">
                        <div className="image-container">
                            <img
                                src={recipe.imageUrl}
                                alt={recipe.title}
                                className="recipe-detail-image img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">

                        <div className="recipe-detail-description">
                            <strong>Sastojci</strong>
                            <ul className="list-unstyled mt-2">
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>
                                        {ingredient.name} ({ingredient.quantity})
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Description */}
                <div className="row justify-content-center mt-4">
                    <div className="col-lg-10 col-md-12">
                        <div className="recipe-detail-description">
                            <strong>Način pripreme</strong>
                            <p>{recipe.description}</p>
                        </div>
                    </div>
                </div>

                {/* Nutritional Information Table */}
                <div className="row justify-content-center mt-4">
                    <div className="col-lg-10 col-md-12">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>NUTRITIVNI PODACI O NAMIRNICAMA (100g)</th>
                                    <th>kcal</th>
                                    <th>UH g</th>
                                    <th>P g</th>
                                    <th>M g</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Rows for each ingredient */}
                                {recipe.ingredients.map((ingredient, index) => (
                                    <tr key={index}>
                                        <td>{ingredient.name}</td>
                                        <td>{ingredient.kcal}</td>
                                        <td>{ingredient.carbohydrates}</td>
                                        <td>{ingredient.proteins}</td>
                                        <td>{ingredient.fats}</td>
                                    </tr>
                                ))}

                                {/* New Row styled similarly to the header */}
                                <tr>
                                    <th>NUTRITIVNI PODACI ZA GOTOVO JELO NA 100gr</th>
                                    <th>{recipe.kcal}</th>
                                    <th>{recipe.carboHydrates}</th>
                                    <th>{recipe.protein}</th>
                                    <th>{recipe.fats}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default RecipeDetail;
