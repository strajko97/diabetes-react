import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import './Layout.css';

function Header() {

    const todayDate = format(new Date(), 'yyyy-MM-dd');
    const handleContactClick = (event) => {
        event.preventDefault();
        const contactSection = document.getElementById('kontakt');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    const location = useLocation();

    useEffect(() => {
        const htmlElement = document.documentElement;
        htmlElement.style.scrollBehavior = 'auto';

        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <section className="header sticky-top">
            <nav className="navbar navbar-expand-lg bg-light" style={{ backgroundImage: 'linear-gradient(to right, rgb(111, 212, 158), rgb(0, 65, 31))' }}>
                <div className="container">
                    <Link className="navbar-brand" to="/">Tanjirići Zdravići</Link>
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

                        <ul className="navbar-nav ms-auto my-2 my-lg-0">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ display: 'flex', alignItems: 'center' }}>
                                    <FontAwesomeIcon icon={faUserCircle} size="lg" style={{ color: '#fff' }} />
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    {/* <li><Link className="dropdown-item" to="/profile">Profil</Link></li> */}
                                    <li className="dropdown-item">Profil</li>
                                    <li>    <Link className="dropdown-item" to={`/profil/dnevni-unos/${todayDate}`}>Dnevni unos</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><button className="dropdown-item" onClick={() => { /* Handle logout */ console.log('Logged out'); }}>Logout</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Header;
