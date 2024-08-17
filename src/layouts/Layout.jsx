import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <div>
            <Header />
            <div style={backgroundContainerStyle}>
                <div style={overlayStyle}></div>
                <main style={contentStyle}>{children}</main>
            </div>
            <Footer />
        </div>
    );
}

const backgroundContainerStyle = {
    position: 'relative',
    minHeight: '100vh', // Ensures full-screen height coverage
};

const overlayStyle = {
    backgroundImage: 'url("https://media.istockphoto.com/id/1198380802/vector/food-background-vegetables-seamless-pattern-healthy-eating-tomato-garlic-carrot-pepper.jpg?s=2048x2048&w=is&k=20&c=qEeXWpwIRCUhGmClYr_amDkoRVJ1KmOtJ0jumyN9STU=")',
    backgroundSize: 'cover', // Ensures the image covers the entire area
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    opacity: 0.1, // Faded background image
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1, // Places the background behind the content
};

const contentStyle = {
    position: 'relative',
    padding: '20px',
};

export default Layout;
