import React from 'react';
import './RecipeCard.css';


const RecipeCard = () => {
  return (
    <div className="col-lg-3 col-sm-10 col-md-6 mx-sm-auto mx-md-0 text-center p-2">
      <div className="recipe border-3 rounded p-3">
        {/* Product image */}
        <div className="container">
          <img
            src={`path/to/image.jpg`} // Example path for images
            alt={`Recipe`}
            width="400px"
            height="400px"
          />
        </div>
        {/* Product name */}
        <div className="my-auto" style={{ height: '60px' }}>
          <h4 className="card-title py-2">Recipe</h4>
        </div>
        {/* Product description */}
        <div className="recipe-description" style={{ height: '50px', textAlign: 'center', overflowY: 'auto' }}>
          Description for Recipe
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;