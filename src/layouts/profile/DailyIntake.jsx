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

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setIsCalendarOpen(false);
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
        marginLeft: '10px', // Small margin to the left of the text
    };

    const calendarWrapperStyle = {
        position: 'absolute',
        top: '100%', // Directly below the button
        left: '0',
        zIndex: 1,
        marginTop: '5px', // Small margin between button and calendar
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
            </div>
        </Layout>
    );
};

export default DailyIntakePage;
