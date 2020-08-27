import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [InputValue, setInputValue] = useState('');

    const handleOnInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        if(InputValue.trim().length > 2){
            setCategories(cats => [InputValue,...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input
                type="text"
                value={ InputValue }
                onChange={ handleOnInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}