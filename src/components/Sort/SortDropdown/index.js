import React, { useContext } from 'react';
import { Context } from '../../../store/Store';

import './styles.css';

const SortDropdown = props => {

    const [state, dispatch] = useContext(Context);

    const options = ['Latest', 'Rating', 'Release Date'];

    return (
        <div className='dropdown'>
            {
                options.map(el => {
                    if (state.sortBy === el) {
                        return <div key={el} className='dropdown-option active' onClick={() => dispatch({ type: 'SET_SORT', payload: el})}>{el}</div> 
                    } 
                    return <div key={el} className='dropdown-option' onClick={() => dispatch({ type: 'SET_SORT', payload: el})}>{el}</div>
                })
            }
        </div>
    )
};

export default SortDropdown;