import React from 'react';
import './Rating.css';

const Rating = ({ value }) => {
    const fullStars = Math.floor(value);
    const halfStar = value % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
        <div className="rating">
            {[...Array(fullStars)].map((_, index) => (
                <span key={index} className="star full">★</span>
            ))}
            {halfStar === 1 && <span className="star half">★</span>}
            {[...Array(emptyStars)].map((_, index) => (
                <span key={index} className="star empty">★</span>
            ))}
            ({value})
        </div>
    );
};

export default Rating;
