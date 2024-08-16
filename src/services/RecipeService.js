// MockRecipeService.js

import { Recipe } from '../models/Recipe';
import { Ingredient } from '../models/Ingredient';
import { config } from '../config';

class MockRecipeService {
    constructor() {
        // Definišemo sastojke sa jedinstvenim ID-ovima
        this.ingredients = [
            new Ingredient(1, 'Beli luk', '3 čena', 4, 1, 0.2, 0),
            new Ingredient(2, 'Crni luk', '1 veliki', 40, 9, 1.1, 0.1),
            new Ingredient(3, 'Paradajz', '2 velika', 44, 10, 2, 0.2),
            new Ingredient(4, 'Pileći file', '300 grama', 330, 0, 31, 3.6),
            new Ingredient(5, 'Maslinovo ulje', '2 kašike', 239, 0, 0, 27),
            new Ingredient(6, 'So', '1 kašičica', 0, 0, 0, 0),
            new Ingredient(7, 'Biber', '1/2 kašičice', 3, 1, 0.2, 0.1),
            new Ingredient(8, 'Sir', '100 grama', 400, 1.3, 25, 33),
            new Ingredient(9, 'Pasta', '200 grama', 262, 50, 9, 1.5)
        ];

        // Definišemo recepte sa preciznim povezivanjem sastojaka
        this.baseRecipes = [
            new Recipe(
                1,
                'Špageti Karbonara',
                'Klasično italijansko jelo od testenine sa jajima, sirom, pancetom i biberom.',
                'https://assets.surlatable.com/m/7d80d18208430d9c/72_dpi_webp-MV-carbonara.jpg',
                3.32,
                600, // kcal
                25,  // proteini
                75,  // ugljeni hidrati
                20,  // masti
                [
                    this.ingredients[0], // Beli luk
                    this.ingredients[2], // Paradajz
                    this.ingredients[8]  // Pasta
                ]
            ),
            new Recipe(
                2,
                'Gulaš',
                'Internacionalno jelo Mađara. Ukusno meso u saftu.',
                'https://glossy.espreso.co.rs/data/images/2022/12/04/13/350283_kafanskisvinjskigulasshutterstock-1962728122_ff.jpg',
                4.76,
                700, // kcal
                35,  // proteini
                60,  // ugljeni hidrati
                30,  // masti
                [
                    this.ingredients[1], // Crni luk
                    this.ingredients[3], // Pileći file
                    this.ingredients[4],  // Maslinovo ulje
                    this.ingredients[6] // Biber
                ]
            ),
            new Recipe(
                3,
                'Beef Stroganoff',
                'Saviti goveđi komadići u ukusnom sosu od pečuraka, servirani preko nudli.',
                'https://www.allrecipes.com/thmb/Rh2NialypvMY-ory6lY4_6cFPvE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/16311-simple-beef-stroganoff-DDMFS-4x3-1e966286eef54c0f96c882e569926eb3.jpg',
                4.32,
                800, // kcal
                40,  // proteini
                50,  // ugljeni hidrati
                35,  // masti
                [
                    this.ingredients[3], // Pileći file
                    this.ingredients[5], // So
                    this.ingredients[6]  // Biber
                ]
            ),
            new Recipe(
                4,
                'Bečka šnicla',
                'Bečka šnicla je popularno jelo u kojem se tanki komad mesa, obično teletina, pohuje i prži.',
                'https://stomacko-cloud.s3.eu-central-1.amazonaws.com/medium/619a93023330df1c6f1b02e0%20Medium.jpeg',
                5,
                900, // kcal
                50,  // proteini
                60,  // ugljeni hidrati
                40,  // masti
                [
                    this.ingredients[1], // Crni luk
                    this.ingredients[3], // Pileći file
                    this.ingredients[6],  // Biber
                    this.ingredients[7]  // Sir
                ]
            )
        ];

        // Generišemo recepte na osnovu baznih recepata
        this.recipes = this.generateRecipes(config.totalProducts);
    }

    generateRecipes(totalProducts) {
        const recipes = [];
        for (let i = 0; i < totalProducts; i++) {
            const baseRecipe = this.baseRecipes[i % this.baseRecipes.length];
            recipes.push(new Recipe(
                i + 1,
                baseRecipe.title,
                baseRecipe.description,
                baseRecipe.imageUrl,
                baseRecipe.rating,
                baseRecipe.kcal,
                baseRecipe.proteins,
                baseRecipe.carbohydrates,
                baseRecipe.fats,
                baseRecipe.ingredients
            ));
        }
        return recipes;
    }

    // Metod za dobijanje svih recepata
    getRecipes() {
        return this.recipes;
    }

    // Metod za dobijanje ukupnog broja recepata
    getTotalRecipes() {
        return this.recipes.length;
    }

    // Metod za dobijanje broja recepata po stranici
    getRecipesPerPage() {
        return config.productsPerPage;
    }

    // Metod za dobijanje jednog recepta po ID-u
    getRecipeById(id) {
        return this.recipes.find(recipe => recipe.id === id);
    }

    // Metod za dobijanje nasumičnih sastojaka
    getRandomIngredients(count) {
        let shuffled = [...this.ingredients].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    getAllIngredients() {
        return this.ingredients;
    }

    // Metod za filtriranje recepata po ID-ovima sastojaka
    filterRecipesByIngredients(ingredientIds) {
        return this.recipes.filter(recipe =>
            ingredientIds.every(id =>
                recipe.ingredients.some(ingredient => ingredient.id === id)
            )
        );
    }

}

export default new MockRecipeService();
