import React, { useState } from 'react';

// Custom Hook for form input management
const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
        // console.log(value);
    };

    return {
        value,
        onChange: handleChange,
    };
};

const Login = () => {
    const email = useFormInput(''); // pocetno stanje naseg hooka je da je to prazna varijabla, hook useFormInput updateduje state cim se email forma promeni
    const password = useFormInput('');// pocetno stanje naseg hooka je da je to prazna varijabla isto i ovde

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here (e.g., call an API to authenticate)
        console.log('Email:', email.value);
        console.log('Password:', password.value);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={containerStyle}>
            <div className="text-center" style={{ maxWidth: '400px' }}>
                <h1 className="mb-4">Dobrodošli na DiabetesApp</h1>
                <div className="col-12" style={loginContainer}>
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email addresa</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email*"
                                {...email} // Spread the email input props
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
                                {...password} // Spread the password input props
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Login
                        </button>
                    </form>
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
