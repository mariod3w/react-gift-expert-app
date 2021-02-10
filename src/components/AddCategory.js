import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddCategory({ setCategories }) {
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        console.log();
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories( cats => [inputValue, ...cats]);
        setinputValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
} 