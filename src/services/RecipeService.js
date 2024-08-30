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
            new Ingredient(9, 'Pasta', '200 grama', 262, 50, 9, 1.5),
            new Ingredient(10, 'Avokado', '1 srednji', 160, 9, 2, 15),
            new Ingredient(11, 'Dimljeni losos', '100 grama', 208, 0, 20, 13),
            new Ingredient(12, 'Brokoli', '150 grama', 45, 8, 3, 0.5),
            new Ingredient(13, 'Limunov sok', '1 kašika', 4, 1, 0.1, 0),
            new Ingredient(14, 'Tikvica', '2 srednje', 38, 7, 3, 1),
            new Ingredient(15, 'Zelena salata', '100 grama', 15, 3, 1, 0.2),
            new Ingredient(16, 'Feta sir', '50 grama', 150, 1.1, 8, 12),
            new Ingredient(17, 'Krastavac', '1 srednji', 16, 4, 1, 0.1),
            new Ingredient(18, 'Tuna', '150 grama', 220, 0, 32, 9),
            new Ingredient(19, 'Spanać', '1 šolja', 7, 1, 1, 0.1),
            new Ingredient(20, 'Banana', '1 srednja', 105, 27, 1.3, 0.3),
            new Ingredient(21, 'Bademovo mleko', '1 šolja', 60, 8, 1, 2.5),
            new Ingredient(22, 'Chia semenke', '1 kašika', 58, 5, 2, 3.5),
            new Ingredient(23, 'Šargarepa', '2 srednje', 50, 12, 1, 0.2),
            new Ingredient(24, 'Celer', '2 stabljike', 20, 4, 1, 0.2),
        ];
        // Definišemo recepte sa preciznim povezivanjem sastojaka
        this.baseRecipes = [
            new Recipe(
                1,
                'Špageti Karbonara',
                'Skuvajte špagete prema uputstvu. U međuvremenu, na maslinovom ulju propržite beli luk, dodajte paradajz i pasta. Pomešajte sa kuvanim špagetima i pospite sirom.',
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
                'U velikoj šerpi propržite crni luk na maslinovom ulju. Dodajte pileći file i začinite biberom i solju. Kuvajte dok meso ne omekša, dodajte začine po ukusu.',
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
                'Na tiganju propržite crni luk, dodajte pileći file. Kada meso porumeni, dodajte so i biber. Kuvajte dok meso ne omekša. Poslužite sa testeninom.',
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
                'Bečka šnicla 1',
                'Pileći file umočite u umućena jaja, a zatim u mrvice od sira. Pržite na vrelom ulju dok ne postane zlatno-smeđa. Poslužite sa kriškama limuna.',
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
            ),
            new Recipe(
                5,
                'Salata od Avokada i Lososa',
                'Pomešajte nasečeni avokado, dimljeni losos, crveni luk i paradajz. Prelijte sa malo maslinovog ulja i limunovog soka. Posolite po ukusu i poslužite hladno.',
                'https://zdravirecepti.com.hr/site/assets/files/31841/salata-piletina-avokado.jpg',
                4.8,
                350, // kcal
                20,  // proteini
                10,  // ugljeni hidrati
                25,  // masti
                [
                    this.ingredients[0], // Beli luk
                    this.ingredients[2], // Paradajz
                    this.ingredients[4], // Maslinovo ulje
                    this.ingredients[10], // Avokado
                    this.ingredients[11] // Dimljeni losos
                ]
            ),
            new Recipe(
                6,
                'Grilovana Piletina sa Brokolijem',
                'Piletinu začinite biberom i soli, pa je grilujte dok ne bude zlatno smeđa. Brokoli kuvajte na pari dok ne omekša. Poslužite piletinu sa brokolijem i limunovim sokom.',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKlA0y60p4c1KXP8_X1BFHv6mH5x8gW9y2sg&s',
                4.9,
                400, // kcal
                35,  // proteini
                10,  // ugljeni hidrati
                20,  // masti
                [
                    this.ingredients[3], // Pileći file
                    this.ingredients[6], // Biber
                    this.ingredients[5], // So
                    this.ingredients[12], // Brokoli
                    this.ingredients[13] // Limunov sok
                ]
            ),
            new Recipe(
                7,
                'Pečena Piletina sa Tikvicama',
                'Piletinu začinite belim lukom, soli i biberom, pa je pecite u rerni zajedno sa tikvicama isečenim na kolutove. Pecite dok piletina ne postane hrskava i zlatno smeđa.',
                'https://static.jutarnji.hr/images/slike/2021/07/19/k_11815491_640.jpg',
                4.7,
                450, // kcal
                35,  // proteini
                12,  // ugljeni hidrati
                25,  // masti
                [
                    this.ingredients[0], // Beli luk
                    this.ingredients[3], // Pileći file
                    this.ingredients[6], // Biber
                    this.ingredients[5], // So
                    this.ingredients[14] // Tikvica
                ]
            ),
            new Recipe(
                8,
                'Salata sa Pilećim Prsima i Feta Sirom',
                'Piletinu ispecite na tiganju dok ne bude zlatno smeđa. U međuvremenu, u činiji pomešajte zelenu salatu, paradajz, krastavac i fetu. Dodajte pečenu piletinu i prelijte sa maslinovim uljem.',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GR9RSgKEreHY-lur1HLXWFshz1_pSIjiig&s',
                4.85,
                350, // kcal
                30,  // proteini
                15,  // ugljeni hidrati
                20,  // masti
                [
                    this.ingredients[2], // Paradajz
                    this.ingredients[3], // Pileći file
                    this.ingredients[4], // Maslinovo ulje
                    this.ingredients[15], // Zelena salata
                    this.ingredients[16], // Feta sir
                    this.ingredients[17]  // Krastavac
                ]
            ),
            new Recipe(
                9,
                'Tuna Salata sa Avokadom',
                'U činiji pomešajte komade tune sa avokadom, crnim lukom i krastavcem. Prelijte sa malo maslinovog ulja i limunovog soka. Posolite po ukusu i poslužite.',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9jqQvgaQ4nBJEkJsQ_aWyaiEHBAYVgr6oGA&s',
                4.8,
                400, // kcal
                25,  // proteini
                10,  // ugljeni hidrati
                30,  // masti
                [
                    this.ingredients[1], // Crni luk
                    this.ingredients[4], // Maslinovo ulje
                    this.ingredients[10], // Avokado
                    this.ingredients[18], // Tuna
                    this.ingredients[17]  // Krastavac
                ]
            ),
            new Recipe(
                10,
                'Smuti sa Spanaćem',
                'U blenderu pomešajte spanać, bananu, bademovo mleko i chia semenke. Blendajte dok ne dobijete glatku smesu. Poslužite hladno.',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5KLJS9dLHniVl80O77zvMUrE-0WU_a-Fkg&s',
                4.7,
                250, // kcal
                5,   // proteini
                30,  // ugljeni hidrati
                10,  // masti
                [
                    this.ingredients[19], // Spanać
                    this.ingredients[20], // Banana
                    this.ingredients[21], // Bademovo mleko
                    this.ingredients[22]  // Chia semenke
                ]
            ),
            new Recipe(
                11,
                'Pileća Supa sa Povrćem',
                'U loncu skuvajte pileći file zajedno sa seckanim povrćem (šargarepa, celer, crni luk). Dodajte začine po ukusu. Poslužite toplo.',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzNFLRjxatF43ULGGUeiRIv4qyKyw5MqGtw&s',
                4.6,
                300, // kcal
                20,  // proteini
                30,  // ugljeni hidrati
                8,   // masti
                [
                    this.ingredients[3],  // Pileći file
                    this.ingredients[1],  // Crni luk
                    this.ingredients[22], // Šargarepa
                    this.ingredients[6]   // So
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

    // Metoda za dobijanje svih recepata
    getRecipes() {
        return this.recipes;
    }

    // Metoda za dobijanje ukupnog broja recepata
    getTotalRecipes() {
        return this.recipes.length;
    }

    // Metoda za dobijanje broja recepata po stranici
    getRecipesPerPage() {
        return config.productsPerPage;
    }

    // Metoda za dobijanje jednog recepta po ID-u
    getRecipeById(id) {
        return this.recipes.find(recipe => recipe.id === id);
    }

    // Metoda za dobijanje nasumičnih sastojaka
    getRandomIngredients(count) {
        let shuffled = [...this.ingredients].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    getAllIngredients() {
        return this.ingredients;
    }

    // Metoda za filtriranje recepata po ID-ovima sastojaka
    filterRecipesByIngredients(ingredientIds) {
        return this.recipes.filter(recipe =>
            ingredientIds.every(id =>
                recipe.ingredients.some(ingredient => ingredient && ingredient.id === id)
            )
        );
    }

}

export default new MockRecipeService();
