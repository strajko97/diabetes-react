import { Recipe } from '../models/Recipe';

class MockRecipeService {
    constructor() {
        // Mock data for recipes
        this.recipes = [
            new Recipe(
                1,
                'Spaghetti Carbonara',
                'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
                'https://assets.surlatable.com/m/7d80d18208430d9c/72_dpi_webp-MV-carbonara.jpg',
                4.62
            ),
            new Recipe(
                2,
                'Gulas',
                'International meal of Hungarians. Delicious meat with sauce.',
                'https://glossy.espreso.co.rs/data/images/2022/12/04/13/350283_kafanskisvinjskigulasshutterstock-1962728122_ff.jpg',
                4.76
            ),
            new Recipe(
                3,
                'Beef Stroganoff',
                'Tender beef strips in a savory mushroom cream sauce, served over noodles.',
                'https://www.allrecipes.com/thmb/Rh2NialypvMY-ory6lY4_6cFPvE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/16311-simple-beef-stroganoff-DDMFS-4x3-1e966286eef54c0f96c882e569926eb3.jpg',
                4.32
            ),
            new Recipe(
                4,
                'Becka snicla',
                'Bečka šnicla je popularno jelo u kojem se tanki komad mesa, obično teletina, pohuje i prži. Meso se prvo izlazi (stanjivanje), zatim se prelije u brašno, jaje i prezle pre nego što se prži u vrućem ulju ili maslacu. Kroz ovaj proces se dobija hrskava, zlatno smeđa korica dok meso ostaje sočno i mekano. Često se servira uz limun, krompir salatu ili pire krompir i sveže povrće.',
                'https://stomacko-cloud.s3.eu-central-1.amazonaws.com/medium/619a93023330df1c6f1b02e0%20Medium.jpeg',
                5
            ),
            new Recipe(
                1,
                'Spaghetti Carbonara',
                'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
                'https://assets.surlatable.com/m/7d80d18208430d9c/72_dpi_webp-MV-carbonara.jpg',
                4.62
            ),
            new Recipe(
                2,
                'Gulas',
                'International meal of Hungarians. Delicious meat with sauce.',
                'https://glossy.espreso.co.rs/data/images/2022/12/04/13/350283_kafanskisvinjskigulasshutterstock-1962728122_ff.jpg',
                4.76
            ),
            new Recipe(
                3,
                'Beef Stroganoff',
                'Tender beef strips in a savory mushroom cream sauce, served over noodles.',
                'https://www.allrecipes.com/thmb/Rh2NialypvMY-ory6lY4_6cFPvE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/16311-simple-beef-stroganoff-DDMFS-4x3-1e966286eef54c0f96c882e569926eb3.jpg',
                4.32
            ),
            new Recipe(
                4,
                'Becka snicla',
                'Bečka šnicla je popularno jelo u kojem se tanki komad mesa, obično teletina, pohuje i prži. Meso se prvo izlazi (stanjivanje), zatim se prelije u brašno, jaje i prezle pre nego što se prži u vrućem ulju ili maslacu. Kroz ovaj proces se dobija hrskava, zlatno smeđa korica dok meso ostaje sočno i mekano. Često se servira uz limun, krompir salatu ili pire krompir i sveže povrće.',
                'https://stomacko-cloud.s3.eu-central-1.amazonaws.com/medium/619a93023330df1c6f1b02e0%20Medium.jpeg',
                5
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
}

export default new MockRecipeService();