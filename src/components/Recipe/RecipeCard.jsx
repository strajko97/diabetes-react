import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  const truncatedDescription = recipe.description.length > 200
    ? `${recipe.description.substring(0, 200)}...`
    : recipe.description;

  return (
    <div className="col-lg-3 col-sm-10 col-md-6 mx-sm-auto mx-md-0 text-center p-2">
      <div className="recipe border-3 rounded p-3">

        <div className="rating-container">
          <svg
            className="rating-star"
            fill="#000000"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_iconCarrier">
              <path d="M28.61,11.67H20l-2.66-8.2a1.39,1.39,0,0,0-2.64,0L12,11.67H3.39a1.39,1.39,0,0,0-.82,2.51l7,5.07L6.89,27.46a1.39,1.39,0,0,0,1.32,1.82A1.43,1.43,0,0,0,9,29l7-5.07L23,29a1.43,1.43,0,0,0,.81.27,1.39,1.39,0,0,0,1.32-1.82l-2.66-8.21,7-5.07A1.39,1.39,0,0,0,28.61,11.67Zm-7.34,6-1.17.86.44,1.38,2.09,6.41-5.45-4L16,21.46l-1.18.86-5.45,4,2.09-6.41.44-1.38-1.17-.86-5.45-4h8.19l.45-1.38L16,5.89l2.08,6.4.45,1.38h8.19Z"></path>
            </g>
          </svg>
          <span className="rating-value">{recipe.rating.toFixed(2)}</span>
        </div>

        <Link to={`/recepti/${recipe.id}`} className="recipe-link">
          <div className="container">
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              className="img-fluid recipe-image"
            />
          </div>
        </Link>

        <Link to={`/recepti/${recipe.id}`} className="recipe-link">
          <div className="my-auto" style={{ height: '60px' }}>
            <h4 className="card-title py-2">{recipe.title}</h4>
          </div>
        </Link>

        <div className="recipe-description" style={{ height: '100px', textAlign: 'center', overflowY: 'auto' }}>
          {truncatedDescription}
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
