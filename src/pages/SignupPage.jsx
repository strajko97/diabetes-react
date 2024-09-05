import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        type: 'standard',
        height: '',
        weight: '',
        activity_level: 'medium',
        birthday_date: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const navigate = useNavigate(); // Hook to navigate programmatically

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    // Handle form submission using fetch or axios
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            const response = await fetch('http://127.0.0.1:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                // Store the token in localStorage
                localStorage.setItem('authToken', data.access_token);

                // Show the success modal
                setShowModal(true);
            } else {
                throw new Error(data.message || 'Failed to register.');
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    // Close the modal and navigate to the home page
    const handleModalClose = () => {
        setShowModal(false);
        navigate('/'); // Redirect to home page
    };

    return (
        <>
            <div className={`d-flex justify-content-center align-items-center vh-100 mb-3 ${showModal ? 'blur-background' : ''}`} style={containerStyle}>
                <div className="text-center">
                    <h1 className="mb-4">Registracija</h1>
                    <div className="col-12" style={signupContainer}>
                        <h2 className="text-center mb-4">Napravi profil</h2>
                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                        <form onSubmit={handleSubmit}>
                            {/* Form fields */}
                            <div className="row">
                                <div className="form-group mb-3 col-md-6 col-xs-10">
                                    <label htmlFor="first_name">Ime</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="first_name"
                                        placeholder="Ime"
                                        value={formData.first_name}
                                        onChange={handleChange}
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
                                        value={formData.last_name}
                                        onChange={handleChange}
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
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="type">Tip korisnika</label>
                                <select
                                    className="form-control"
                                    id="type"
                                    value={formData.type}
                                    onChange={handleChange}
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
                                        value={formData.height}
                                        onChange={handleChange}
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
                                        value={formData.weight}
                                        onChange={handleChange}
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
                                    value={formData.activity_level}
                                    onChange={handleChange}
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
                                    value={formData.birthday_date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Registracija
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Modal for successful registration */}
            {showModal && (
                <div className="custom-modal-container">
                    <div className="custom-modal">
                        <div className="modal-header">
                            <h5 className="modal-title">Registration Successful</h5>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleModalClose}
                            >
                                Pocetna strana
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SignUp;

const signupContainer = {
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

// Add this CSS directly in your stylesheet or inside the component
const style = document.createElement('style');
style.innerHTML = `
  /* Blur background when modal is open */
  .blur-background {
    filter: blur(5px);
  }

  /* Modal container centered */
  .custom-modal-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1050;
  }

  /* Modal box styling */
  .custom-modal {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  /* Center modal header */
  .modal-header {
    display: flex;
    justify-content: center;
  }

  /* Center modal footer */
  .modal-footer {
    display: flex;
    justify-content: center;
  }
`;
document.head.appendChild(style);
