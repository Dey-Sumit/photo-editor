import React from 'react';

const Slider = ({ min, max, value, handleChange }) => {
    return (
        <div className="slider">
            <input type="range"
                className="slider-input"
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default Slider;