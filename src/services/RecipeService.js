import { Recipe } from '../models/Recipe';
import { Ingredient } from '../models/Ingredient';

class MockRecipeService {
    constructor() {
        // Mock data for ingredients with nutritional information
        this.ingredients = [
            new Ingredient('Garlic', '3 cloves', 4, 1, 0.2, 0),
            new Ingredient('Onion', '1 large', 40, 9, 1.1, 0.1),
            new Ingredient('Tomato', '2 large', 44, 10, 2, 0.2),
            new Ingredient('Chicken Breast', '300 grams', 330, 0, 31, 3.6),
            new Ingredient('Olive Oil', '2 tablespoons', 239, 0, 0, 27),
            new Ingredient('Salt', '1 teaspoon', 0, 0, 0, 0),
            new Ingredient('Pepper', '1/2 teaspoon', 3, 1, 0.2, 0.1),
            new Ingredient('Cheese', '100 grams', 400, 1.3, 25, 33),
            new Ingredient('Pasta', '200 grams', 262, 50, 9, 1.5)
        ];

        // Mock data for recipes with nutritional information and random ingredients
        this.recipes = [
            new Recipe(
                1,
                'Spaghetti Carbonara',
                'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
                'https://assets.surlatable.com/m/7d80d18208430d9c/72_dpi_webp-MV-carbonara.jpg',
                3.32,
                600, // kcal
                25,  // proteins
                75,  // carbohydrates
                20,  // fats
                this.getRandomIngredients(3) // Assign 3 random ingredients
            ),
            new Recipe(
                2,
                'Gulas',
                'International meal of Hungarians. Delicious meat with sauce.',
                'https://glossy.espreso.co.rs/data/images/2022/12/04/13/350283_kafanskisvinjskigulasshutterstock-1962728122_ff.jpg',
                4.76,
                700, // kcal
                35,  // proteins
                60,  // carbohydrates
                30,  // fats
                this.getRandomIngredients(3) // Assign 3 random ingredients
            ),
            new Recipe(
                3,
                'Beef Stroganoff',
                'Tender beef strips in a savory mushroom cream sauce, served over noodles.',
                'https://www.allrecipes.com/thmb/Rh2NialypvMY-ory6lY4_6cFPvE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/16311-simple-beef-stroganoff-DDMFS-4x3-1e966286eef54c0f96c882e569926eb3.jpg',
                4.32,
                800, // kcal
                40,  // proteins
                50,  // carbohydrates
                35,  // fats
                this.getRandomIngredients(3) // Assign 3 random ingredients
            ),
            new Recipe(
                4,
                'Becka snicla',
                'Bečka šnicla je popularno jelo u kojem se tanki komad mesa, obično teletina, pohuje i prži. Meso se prvo izlazi (stanjivanje), zatim se prelije u brašno, jaje i prezle pre nego što se prži u vrućem ulju ili maslacu. Kroz ovaj proces se dobija hrskava, zlatno smeđa korica dok meso ostaje sočno i mekano. Često se servira uz limun, krompir salatu ili pire krompir i sveže povrće.',
                'https://stomacko-cloud.s3.eu-central-1.amazonaws.com/medium/619a93023330df1c6f1b02e0%20Medium.jpeg',
                5,
                900, // kcal
                50,  // proteins
                60,  // carbohydrates
                40,  // fats
                this.getRandomIngredients(3) // Assign 3 random ingredients
            ),
            new Recipe(
                1,
                'Spaghetti Carbonara',
                'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
                'https://assets.surlatable.com/m/7d80d18208430d9c/72_dpi_webp-MV-carbonara.jpg',
                3.32,
                600, // kcal
                25,  // proteins
                75,  // carbohydrates
                20,  // fats
                this.getRandomIngredients(3) // Assign 3 random ingredients
            ),
            new Recipe(
                2,
                'Gulas',
                'International meal of Hungarians. Delicious meat with sauce.',
                'https://glossy.espreso.co.rs/data/images/2022/12/04/13/350283_kafanskisvinjskigulasshutterstock-1962728122_ff.jpg',
                4.76,
                700, // kcal
                35,  // proteins
                60,  // carbohydrates
                30,  // fats
                this.getRandomIngredients(3) // Assign 3 random ingredients
            ),
            new Recipe(
                3,
                'Beef Stroganoff',
                'Tender beef strips in a savory mushroom cream sauce, served over noodles.',
                'https://www.allrecipes.com/thmb/Rh2NialypvMY-ory6lY4_6cFPvE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/16311-simple-beef-stroganoff-DDMFS-4x3-1e966286eef54c0f96c882e569926eb3.jpg',
                4.32,
                800, // kcal
                40,  // proteins
                50,  // carbohydrates
                35,  // fats
                this.getRandomIngredients(3) // Assign 3 random ingredients
            ),
            new Recipe(
                4,
                'Becka snicla',
                'Bečka šnicla je popularno jelo u kojem se tanki komad mesa, obično teletina, pohuje i prži. Meso se prvo izlazi (stanjivanje), zatim se prelije u brašno, jaje i prezle pre nego što se prži u vrućem ulju ili maslacu. Kroz ovaj proces se dobija hrskava, zlatno smeđa korica dok meso ostaje sočno i mekano. Često se servira uz limun, krompir salatu ili pire krompir i sveže povrće.',
                'https://stomacko-cloud.s3.eu-central-1.amazonaws.com/medium/619a93023330df1c6f1b02e0%20Medium.jpeg',
                5,
                900, // kcal
                50,  // proteins
                60,  // carbohydrates
                40,  // fats
                this.getRandomIngredients(3) // Assign 3 random ingredients
            ),
            new Recipe(
                1,
                'Spaghetti Carbonara',
                'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
                'https://assets.surlatable.com/m/7d80d18208430d9c/72_dpi_webp-MV-carbonara.jpg',
                3.32,
                600, // kcal
                25,  // proteins
                75,  // carbohydrates
                20,  // fats
                this.getRandomIngredients(3) // Assign 3 random ingredients
            )

        ];
    }

    // Method to fetch all recipes
    getRecipes() {
        return this.recipes;
    }

    // Method to fetch a single recipe by ID
    getRecipeById(id) {
        return this.recipes.find(recipe => recipe.id === id);
    }

    // Method to fetch a random set of ingredients
    getRandomIngredients(count) {
        let shuffled = [...this.ingredients].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
}

export default new MockRecipeService();
