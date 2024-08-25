import React from 'react';
import Layout from '../layouts/Layout';
import RecipeCard from '../components/Recipe/RecipeCard';
import MockRecipeService from '../services/RecipeService';

const Home = () => {
    const top3Recipes = MockRecipeService.getRecipes()
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);

    return (
        <Layout>
            <div className="container mt-5">
                <h1 style={headingStyle}>Dobrodošli na Tanjirići Zdravci</h1>
                <p style={paragraphStyle}>
                    Naša misija je da vam pomognemo da uživate u zdravoj i ukusnoj ishrani koja je prilagođena vašim potrebama. Pregledajte naše najbolje recepte i otkrijte kako svaki obrok može biti pravo uživanje, a da pritom brinete o svom zdravlju.
                </p>
                <div className="row">
                    {top3Recipes.map((recipe) => (
                        <RecipeCard recipe={recipe} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

const headingStyle = {
    fontFamily: '"Charmonman", cursive',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
};

const paragraphStyle = {
    fontFamily: '"Charmonman", cursive',
    fontSize: '1.5rem',
    textAlign: 'center',
    marginBottom: '40px',
    lineHeight: '1.6',
};

export default Home;
