import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

function Header() {

    const handleContactClick = (event) => {
        event.preventDefault(); // Prevent the default anchor behavior adding #kontakt to url
        const contactSection = document.getElementById('kontakt');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };


    const location = useLocation();

    useEffect(() => {
        // Temporarily disable smooth scrolling
        const htmlElement = document.documentElement;
        htmlElement.style.scrollBehavior = 'auto';

        // Scroll to the top of the page instantly when the route changes
        if (!location.hash) {
            window.scrollTo(0, 0); // Instant scroll
        }

        // Re-enable smooth scrolling or clean up by removing the style
        // return () => {
        //     htmlElement.style.scrollBehavior = ''; // Resets to the default behavior
        // };
    }, [location]);





    return (
        <section className="header sticky-top">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Zdrava ishrana</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav m-auto my-2 my-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/recepti">Recepti</Link>
                            </li>
                            <li className="nav-item">
                                {/* Use onClick to prevent default behavior and trigger smooth scrolling */}
                                <a className="nav-link" href="#kontakt" onClick={handleContactClick}>Kontakt</a>
                            </li>
                        </ul>

                        <form className="d-flex" role="search">
                            <input id="search-input" className="px-2 search" type="search" placeholder="Pretraži" aria-label="Search" />
                            <button className="btn-search pb-1">
                                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="white" className="pb-1">
                                    <path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" fill="none"></path>
                                    <path d="M15 15L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2"></path>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Header;
