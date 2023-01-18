import { useState } from "react" 

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( e ) => {
        e.preventDefault();
        const newValue = inputValue.trim();

        if ( newValue.trim().length <= 1 ) return false;
        
        onNewCategory( newValue );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Nueva categoría"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
  
    )
}
