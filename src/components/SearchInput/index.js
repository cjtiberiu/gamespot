import React, { useContext } from 'react';
import { Context } from '../../store/Store';

import './styles.css';

const SearchInput = () => {

    const [state, dispatch] = useContext(Context);

    const handleSearch = (e) => {
        setTimeout(() => {
            dispatch({ type: 'SET_SEARCH', payload: e.target.value})
        }, 750)
    }

    return (
        <div className='search-field'>
            <input 
                className='search-input' 
                type='text' 
                placeholder='Search game'
                onChange={handleSearch}
            />
        </div>
    )
};

export default SearchInput;