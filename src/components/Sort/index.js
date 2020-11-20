import React, { useContext } from 'react';
import { Context } from '../../store/Store';

import './styles.css';

import SortDropdown from './SortDropdown';

const Sort = props => {

    const [state, dispatch] = useContext(Context);

    console.log(state);

    return (
        <div className='sort'>
            <div>Sort by: </div>
            <i className="fas fa-angle-down"></i>
            <SortDropdown />
        </div>
    )
};

export default Sort;