import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    /* 
    
    En useState poner un '' string vacio para que no 
    nos de un warning

    */

    const [inputValue, setInputValue] = useState(''); 
    const handleInputChange = (e) => { 
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ){
            setCategories( cats => [...cats, inputValue] );
            setInputValue('');
        }
        
        
    }

    return (
        <>
        <form onSubmit={ handleSubmit }>
           <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }      
           />
        </form>
        </>
    )       
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
    }