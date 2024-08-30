import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children, isAdmin }) => {
    return (
        <div className="layout-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <aside className="sidebar">
                            <h4>Menu</h4>
                            <ul>
                                <li><Link to="/profil/dnevni-unos">Dnevni unos</Link></li>
                                <li><Link to="/">Pocetna</Link></li>
                                <li><Link to="/recepti">Recepti</Link></li>
                                {isAdmin && (
                                    <>
                                        <h4>Admin sekcija</h4>
                                        <li><Link to="/manage-recipes">Upravljanje receptima</Link></li>
                                        <li><Link to="/manage-ingredients">Upravljanje sastojcima</Link></li>
                                    </>
                                )}
                            </ul>
                        </aside>
                    </div>
                </div>
            </nav>
            <main className="main-content">
                {children}
            </main>
        </div>
    );
};

export default Layout;
