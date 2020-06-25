import React, { useState } from 'react'

import PropTypes from 'prop-types';


const AddCategory = ({setCategoria}) => {

    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e) => {
        
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
            e.preventDefault()

            if (inputValue.trim().length > 2) {
                setCategoria(resp=> [ inputValue ,...resp]);
                setinputValue('');
            }
    }

    return (
        
          <form onSubmit={handleSubmit}>
            <input 
                    text='text'
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>  
    )
}

AddCategory.propTypes = {
    setCategoria: PropTypes.func.isRequired
}

export default AddCategory
