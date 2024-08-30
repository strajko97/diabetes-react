import React from 'react';

const SignUp = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-up logic here
    };



    return (
        <div className="d-flex justify-content-center align-items-center vh-100 mb-3" style={containerStyle}>
            <div className="text-center">
                <h1 className="mb-4">Registracija</h1>
                <div className="col-12" style={signupContainer}>
                    <h2 className="text-center mb-4">Napravi profil</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group mb-3 col-md-6 col-xs-10 tex-center">
                                <label htmlFor="first_name">Ime</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="first_name"
                                    placeholder="Ime"
                                    required
                                />
                            </div>
                            <div className="form-group mb-3 col-md-6 col-xs-10">
                                <label htmlFor="last_name">Prezime</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="last_name"
                                    placeholder="Prezime"
                                    required
                                />
                            </div>

                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="email">Email addresa</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="type">Tip korisnika</label>
                            <select
                                className="form-control"
                                id="type"
                                required
                            >
                                <option value="standard">Standard</option>
                                <option value="premium">Premium</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div className="row">
                            <div className="form-group mb-3 col-md-6 col-xs-10">
                                <label htmlFor="height">Visina (cm)</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="height"
                                    placeholder="Visina"
                                    min="120"
                                    max="255"
                                    required
                                />
                            </div>
                            <div className="form-group mb-3 col-md-6 col-xs-10">
                                <label htmlFor="weight">Tezina (kg)</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="weight"
                                    placeholder="Tezina"
                                    min="40"
                                    max="260"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="activity_level">Nivo aktivnosti</label>
                            <select
                                className="form-control"
                                id="activity_level"
                                required
                            >
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="birthday_date">Datum rodjenja</label>
                            <input
                                type="date"
                                className="form-control"
                                id="birthday_date"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Registracija
                        </button>
                    </form>
                    <div className="mt-3">
                        <p>Registoravani ste? <a href="/login">Login</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

const signupContainer = {
    border: '2px solid #000', // 2px solid black border
    borderRadius: '8px', // Rounded corners
    padding: '20px', // Padding inside the container
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
    backgroundColor: '#fff', // Background color for the form
    margin: '0 auto', // Center the container within its column
};

const containerStyle = {
    backgroundColor: '#f7f7f7', // Light gray background for the full container
    padding: '20px', // Additional padding for better spacing
};
