import React, { useState, useRef } from 'react';
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

const ResetPasswordSendEmail = () => {
    const email = useFormInput(''); // Handle email input
    const password = useFormInput(''); // Handle new password input
    const [errorMessage, setErrorMessage] = useState(''); // State to store error messages
    const [successMessage, setSuccessMessage] = useState(''); // State to store success messages
    const [showCodeInput, setShowCodeInput] = useState(false); // Toggle for showing the code inputs
    const [codeConfirmed, setCodeConfirmed] = useState(false); // Track if the reset code was confirmed
    const [code, setCode] = useState(new Array(6).fill('')); // Store the 6-digit code entered
    const navigate = useNavigate(); // Hook to navigate programmatically

    const inputRefs = useRef([]); // Array to store input references

    // Handle email/code/password form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear any previous error messages
        setSuccessMessage(''); // Clear any previous success messages

        try {
            if (!showCodeInput) {
                // Send email to request reset code
                const response = await fetch('http://127.0.0.1:8000/reset_password_send_email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email.value,
                    }),
                });

                const data = await response.json();

                if (response.ok) {
                    setSuccessMessage('Instructions for resetting your password have been sent to your email.');
                    setShowCodeInput(true); // Show the code input after the email is sent
                } else {
                    setErrorMessage(data.message || 'Email address is incorrect.');
                }
            } else {
                // Confirm reset code and send new password with PUT request
                const fullCode = code.join(''); // Combine all input values into a single code string

                // Debug: Log the payload to ensure everything is being sent correctly
                console.log({
                    email: email.value,
                    reset_password_code: fullCode,
                    password: password.value, // Ensure password is correctly captured
                });

                // Submit new password along with the reset code using PUT request
                const response = await fetch('http://127.0.0.1:8000/reset_password', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email.value,
                        reset_password_code: fullCode,
                        password: password.value, // Ensure the password is included in the payload
                    }),
                });

                const data = await response.json();

                if (response.ok) {
                    setSuccessMessage('Your password has been successfully reset.');
                    setTimeout(() => navigate('/login'), 3000); // Redirect to login page after 3 seconds
                } else {
                    setErrorMessage(data.message || 'Failed to reset password.');
                }
            }
        } catch (error) {
            setErrorMessage('Something went wrong. Please try again.');
        }
    };

    // Handle changes in the code inputs
    const handleCodeChange = (value, index) => {
        if (/^[0-9A-Za-z]$/.test(value) || value === '') {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            // Move to the next input field automatically
            if (value !== '' && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    // Handle pasting a full code
    const handlePaste = (e) => {
        const pasteData = e.clipboardData.getData('text').slice(0, 6); // Get the pasted string and limit to 6 characters
        const newCode = pasteData.split('');
        setCode(newCode);

        // Automatically fill in the inputs
        newCode.forEach((char, idx) => {
            if (inputRefs.current[idx]) {
                inputRefs.current[idx].value = char;
            }
        });

        // Focus the last input after pasting
        inputRefs.current[newCode.length - 1].focus();
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={containerStyle}>
            <div className="text-center" style={{ maxWidth: '400px' }}>
                <h1 className="mb-4">Resetuj Lozinku</h1>
                <div className="col-12" style={loginContainer}>
                    <h2 className="text-center mb-4">
                        {!codeConfirmed ? (showCodeInput ? 'Unesite kod' : 'Unesite vašu email adresu') : 'Postavite novu lozinku'}
                    </h2>

                    {/* Error message */}
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                    {/* Success message */}
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}

                    <form onSubmit={handleSubmit}>
                        {!showCodeInput && (
                            <div className="form-group mb-4">
                                <label htmlFor="email">Email adresa</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email*"
                                    {...email}
                                    required
                                />
                            </div>
                        )}

                        {showCodeInput && (
                            <div>
                                <div className="d-flex justify-content-between mb-4" onPaste={handlePaste}>
                                    {code.map((digit, idx) => (
                                        <input
                                            key={idx}
                                            type="text"
                                            className="form-control text-center mx-1"
                                            id={`code-${idx}`}
                                            maxLength="1"
                                            value={digit}
                                            ref={(el) => (inputRefs.current[idx] = el)} // Store reference for each input
                                            onChange={(e) => handleCodeChange(e.target.value, idx)}
                                            required
                                            style={{ width: '45px' }}
                                        />
                                    ))}
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="password">Nova lozinka</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Nova lozinka*"
                                        {...password}
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary w-100 mt-4">
                            {!showCodeInput ? 'Pošalji email' : 'Potvrdi kod i resetuj lozinku'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordSendEmail;

const loginContainer = {
    border: '2px solid #000',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    margin: '0 auto',
};

const containerStyle = {
    backgroundColor: '#f7f7f7',
    padding: '20px',
};
