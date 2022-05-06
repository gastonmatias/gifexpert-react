import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('')/* input empezara siendo string vacio! */

    /* al escribir en el input, capturar
    lo qe se digite */
    const handleInputChange = (e) => {
        /* set input irá guardando la digitacion en el input */
        setInputValue(e.target.value)
        //console.log(e.target.value)
    }
    
    /* al presionar ENTER */
    const handleSubmit = (e) => {
        e.preventDefault()
        
        /* validar de NO ingresar input vacio */
        /* trim, para eliminar espacios vacios */
        if (inputValue.trim().length > 2) {
            setCategories((arr) => [inputValue,...arr])
            /* para resetear el input */
            setInputValue('')
            
        }
        
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={inputValue}
            onChange={handleInputChange }
            />
      </form>
  )
}

/* objeto para determinar propiedades de los
propTypes */
AddCategory.propTypes = {
    //setCategories: PropTypes.isRequired
    setCategories: PropTypes.func.isRequired
}
