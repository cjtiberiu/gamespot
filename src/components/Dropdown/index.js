import React, { useState, useContext } from 'react';
import { Context } from '../../store/Store';

import './styles.css';

const SortDropdown = props => {

    const { options, type } = props;

    const [state, dispatch] = useContext(Context);
    const { yearFilter, genreFilter } = state;

    const handleClick = (el) => {
        if (type === 'sort') {
            dispatch({ type: 'SET_SORT', payload: el})
        } else if (type === 'year') {
            dispatch({ type: 'SET_YEAR_FILTER', payload: el })
        }
    };

    const handleCheckbox = (e) => {

        if (type === 'year') {
            const yearsArray = yearFilter.map(el => el);
            if (e.target.checked) {
                yearsArray.push(e.target.value);
                dispatch({ type: "SET_YEAR_FILTER", payload: yearsArray});
            }
    
            if (!e.target.checked) {
                const removeFromArray = yearsArray.map(el => el).filter(el => el !== e.target.value)
                dispatch({ type: "SET_YEAR_FILTER", payload: removeFromArray});
            }
        }

        if (type === 'genre') {
            const genresArray = genreFilter.map(el => el);
            if (e.target.checked) {
                genresArray.push(e.target.value);
                dispatch({ type: "SET_GENRE_FILTER", payload: genresArray});
            }
    
            if (!e.target.checked) {
                const removeFromArray = genresArray.map(el => el).filter(el => el !== e.target.value)
                dispatch({ type: "SET_GENRE_FILTER", payload: removeFromArray});
            }
        }
        
        
    }

    return (
        <div className='dropdown'>
            {
                type === 'sort' ? (
                    options.map(el => {
                        if (el === state.sortBy) {
                            return <div key={el} className='dropdown-option active' onClick={() => handleClick(el)}>{el}</div>
                        }
                        return <div key={el} className='dropdown-option' onClick={() => handleClick(el)}>{el}</div>
                    })
                ) : null
            }
            {
                type === 'year' || type === 'genre' ? (
                    options.map(el => {
                        return (

                            <label key={el} className="checkbox-container">{el}
                                <input className='checkbox' type='checkbox' value={el} name={el} onChange={e => handleCheckbox(e, type)} />
                                <span className="checkmark"></span>
                            </label>
                        )
                    })
                ) : null
            }
                
                
            
        </div>
    )
};

export default SortDropdown;