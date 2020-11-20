import React, { useContext } from 'react';
import { Context } from '../../../store/Store';

import './styles.css';

const SortDropdown = props => {

    const [state, dispatch] = useContext(Context);

    console.log(state);

    const options = ['Latest', 'Rating', 'Release Date'];

    return (
        <div className='sort-dropdown'>
            {
                options.map(el => {
                    return <div key={el} className='sort-option' onClick={() => dispatch({ type: 'SET_SORT', payload: el})}>{el}</div>
                })
            }
        </div>
    )
};

export default SortDropdown;