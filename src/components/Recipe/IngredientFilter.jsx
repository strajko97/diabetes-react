import React, { useState, useEffect } from 'react';
import MockRecipeService from '../../services/RecipeService';
import './IngredientFilter.css';

const IngredientFilter = ({ onFilter, selectedIngredients }) => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const fetchedIngredients = MockRecipeService.getAllIngredients();
        setIngredients(fetchedIngredients);
    }, []);

    const handleCheckboxChange = (event) => {
        const ingredientId = Number(event.target.value);
        const isChecked = event.target.checked;

        let updatedSelectedIngredients;

        if (isChecked) {
            // Add the ingredient ID only if it is not already in the array
            updatedSelectedIngredients = [...new Set([...selectedIngredients, ingredientId])];
        } else {
            // Remove the ingredient ID if it is unchecked
            updatedSelectedIngredients = selectedIngredients.filter(id => id !== ingredientId);
        }

        onFilter(updatedSelectedIngredients);
    };

    return (
        <div className="ingredient-filter">
            <h5>Sastojci</h5>
            {ingredients.map((ingredient) => (
                <div key={ingredient.id} className="form-check">
                    <input
                        type="checkbox"
                        value={ingredient.id}
                        checked={selectedIngredients.includes(ingredient.id)}
                        onChange={handleCheckboxChange}
                        className="form-check-input"
                        id={`ingredient-${ingredient.id}`}
                    />
                    <label className="form-check-label" htmlFor={`ingredient-${ingredient.id}`}>
                        {ingredient.name}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default IngredientFilter;
