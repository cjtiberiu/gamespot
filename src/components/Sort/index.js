import React, { useContext } from 'react';
import { Context } from '../../store/Store';

import './styles.css';

import SortDropdown from './SortDropdown';
import Dropdown from '../Dropdown';

const Sort = props => {

    const [state, dispatch] = useContext(Context);

    const options = ['Latest', 'Rating', 'Release Date'];

    console.log(state.sortBy);

    return (
        <div className='sort'>
            <div>Sort by: {state.sortBy}</div>
            <i className="fas fa-angle-down"></i>
            <Dropdown options={options} type='sort' />
        </div>
    )
};

export default Sort;