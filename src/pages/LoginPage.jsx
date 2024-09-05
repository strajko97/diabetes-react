import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

// Custom Hook for form input management
const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return {
        value,
        onChange: handleChange,
    };
};

const Login = () => {
    const email = useFormInput(''); // Handle email input
    const password = useFormInput(''); // Handle password input
    const [errorMessage, setErrorMessage] = useState(''); // State to store error messages
    const navigate = useNavigate(); // Hook to navigate programmatically

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear any previous error messages

        try {
            const response = await fetch('http://127.0.0.1:8000/login', { // Ensure this is the correct login endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email.value,
                    password: password.value,
                }),
            });

            // Check if the response status is OK (successful)
            const data = await response.json();

            if (response.ok) {
                // If login is successful, store the token in localStorage
                localStorage.setItem('authToken', data.access_token);

                // Navigate to the home page after login
                navigate('/');
            } else {
                // If login fails, set error message
                setErrorMessage(data.message || 'Email or password are incorrect.');
            }
        } catch (error) {
            // If there's a network error or unexpected issue, set a generic error message
            setErrorMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={containerStyle}>
            <div className="text-center" style={{ maxWidth: '400px' }}>
                <h1 className="mb-4">Dobrodošli na DiabetesApp</h1>
                <div className="col-12" style={loginContainer}>
                    <h2 className="text-center mb-4">Login</h2>

                    {/* Error message */}
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email addresa</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email*"
                                {...email}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password*"
                                {...password}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Login
                        </button>
                    </form>

                    {/* Link to reset password */}
                    <div className="mt-3">
                        <p>Zaboravili ste lozinku? <a href="/reset-lozinke">Resetuj lozinku</a></p>
                    </div>

                    <div className="mt-3">
                        <p>Niste registovani? <a href="/registracija">Registracija</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

const loginContainer = {
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
