import { Ingredient } from './Ingredient';

export class Recipe {
    constructor(id, title, description, imageUrl, rating, kcal, proteins, carbohydrates, fats, ingredients) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.rating = rating;
        this.kcal = kcal;
        this.proteins = proteins;
        this.carbohydrates = carbohydrates;
        this.fats = fats;
        this.ingredients = ingredients;
    }

    addIngredient(ingredient) {
        if (ingredient instanceof Ingredient) {
            this.ingredients.push(ingredient);
        } else {
            console.error('Invalid ingredient');
        }
    }

    removeIngredient(ingredientName) {
        this.ingredients = this.ingredients.filter(
            ingredient => ingredient.name !== ingredientName
        );
    }

}