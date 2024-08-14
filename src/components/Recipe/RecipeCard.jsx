import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  const truncatedDescription = recipe.description.length > 200
    ? `${recipe.description.substring(0, 200)}...`
    : recipe.description;

  return (
    <div className="col-lg-3 col-sm-10 col-md-6 mx-sm-auto mx-md-0 text-center p-2">
      <div className="recipe border-3 rounded p-3">
        {/* Product image */}
        <div className="container">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="img-fluid recipe-image"
          />
        </div>
        {/* Product name */}
        <div className="my-auto" style={{ height: '60px' }}>
          <h4 className="card-title py-2">{recipe.title}</h4>
        </div>
        {/* Product description */}
        <div className="recipe-description" style={{ height: '100px', textAlign: 'center', overflowY: 'auto' }}>
          {truncatedDescription}
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;