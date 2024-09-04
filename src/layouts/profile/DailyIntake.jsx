import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parseISO } from 'date-fns';

const DailyIntakePage = () => {
    const navigate = useNavigate();
    const { datum } = useParams();
    const [selectedDate, setSelectedDate] = useState(datum ? parseISO(datum) : new Date());
    const [highlightedDates, setHighlightedDates] = useState([]);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    // Initialize daily intake with default structure
    const [dailyIntake, setDailyIntake] = useState({
        Breakfast: { recipe: null, portion: '' },
        Lunch: { recipe: null, portion: '' },
        Dinner: { recipe: null, portion: '' },
    });
    const [availableRecipes, setAvailableRecipes] = useState([]);

    const calendarRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        navigate(`/profil/dnevni-unos/${format(selectedDate, 'yyyy-MM-dd')}`);
    }, [selectedDate, navigate]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setIsCalendarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Fetch daily intake data for the selected date
    useEffect(() => {
        const fetchDailyIntake = async () => {
            try {
                // Mock fetch logic for daily intake
                const data = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            Breakfast: { recipe: { id: 1, name: 'Recipe A' }, portion: '150g' },
                            Lunch: null, // No recipe for lunch
                            Dinner: { recipe: { id: 2, name: 'Recipe B' }, portion: '200g' },
                        });
                    }, 1000);
                });
                // Ensure that each meal has a default structure even if missing
                setDailyIntake({
                    Breakfast: data.Breakfast || { recipe: null, portion: '' },
                    Lunch: data.Lunch || { recipe: null, portion: '' },
                    Dinner: data.Dinner || { recipe: null, portion: '' },
                });
            } catch (error) {
                console.error('Error fetching daily intake:', error);
            }
        };

        // Fetch all possible recipes
        const fetchAllRecipes = async () => {
            try {
                // Mock fetch logic for all available recipes
                const data = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve([
                            { id: 1, name: 'Recipe A' },
                            { id: 2, name: 'Recipe B' },
                            { id: 3, name: 'Recipe C' },
                            { id: 4, name: 'Recipe D' },
                        ]);
                    }, 1000);
                });
                setAvailableRecipes(data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchDailyIntake();
        fetchAllRecipes();
    }, [selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setIsCalendarOpen(false);
    };

    const handlePortionChange = (mealType, value) => {
        // Ensure meal type exists before updating
        setDailyIntake((prevState) => ({
            ...prevState,
            [mealType]: {
                ...prevState[mealType],
                portion: value,
            },
        }));
    };

    const handleRecipeChange = (mealType, recipeId) => {
        const selectedRecipe = availableRecipes.find((recipe) => recipe.id === parseInt(recipeId));
        setDailyIntake((prevState) => ({
            ...prevState,
            [mealType]: {
                ...prevState[mealType],
                recipe: selectedRecipe,
            },
        }));
    };

    const handleSave = () => {
        console.log('Updated Daily Intake:', dailyIntake);
    };

    const containerStyle = {
        padding: '20px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    };

    const headingStyle = {
        fontSize: '2rem',
        marginBottom: '20px',
        fontFamily: '"Charmonman", cursive',
        color: '#000',
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
    };

    const dateButtonStyle = {
        padding: '5px 10px',
        fontSize: '1.5rem',
        fontFamily: '"Charmonman", cursive',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        border: '1px solid #ccc',
        borderRadius: '8px',
        color: '#000',
        cursor: 'pointer',
        textDecoration: 'none',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
        transition: 'background-color 0.3s ease',
        marginLeft: '10px',
    };

    const calendarWrapperStyle = {
        position: 'absolute',
        top: '100%',
        left: '0',
        zIndex: 1,
        marginTop: '5px',
    };

    const inputStyle = {
        padding: '5px',
        fontSize: '1rem',
        borderRadius: '5px',
        marginRight: '10px',
    };

    const selectStyle = {
        padding: '5px',
        fontSize: '1rem',
        marginRight: '10px',
        borderRadius: '5px',
    };

    const saveButtonStyle = {
        padding: '10px 20px',
        fontSize: '1.2rem',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px',
    };

    return (
        <Layout isAdmin={true}>
            <div style={containerStyle}>
                <h1 style={headingStyle}>
                    Dnevni unos za datum{' '}
                    <button
                        ref={buttonRef}
                        style={dateButtonStyle}
                        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                    >
                        {format(selectedDate, 'dd.MM.yyyy')}
                    </button>
                </h1>
                {isCalendarOpen && (
                    <div ref={calendarRef} style={calendarWrapperStyle}>
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            highlightDates={highlightedDates.map(date => parseISO(date))}
                            inline
                        />
                    </div>
                )}
                <div>
                    <h2>Daily Intake</h2>
                    {['Breakfast', 'Lunch', 'Dinner'].map((mealType) => (
                        <div key={mealType} style={{ marginBottom: '20px' }}>
                            <h3>{mealType}</h3>
                            <label>Recipe:</label>
                            <select
                                value={dailyIntake[mealType]?.recipe?.id || ''}
                                onChange={(e) => handleRecipeChange(mealType, e.target.value)}
                                style={selectStyle}
                            >
                                <option value="">No Recipe Selected</option>
                                {availableRecipes.map((recipe) => (
                                    <option key={recipe.id} value={recipe.id}>
                                        {recipe.name}
                                    </option>
                                ))}
                            </select>
                            <label>Portion:</label>
                            <input
                                type="text"
                                value={dailyIntake[mealType]?.portion || ''}
                                style={inputStyle}
                                onChange={(e) => handlePortionChange(mealType, e.target.value)}
                            />
                        </div>
                    ))}
                    <button style={saveButtonStyle} onClick={handleSave}>
                        Save Changes
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default DailyIntakePage;
