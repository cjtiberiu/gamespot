import React, { useContext } from 'react';
import { Context } from '../../store/Store';

import './styles.css';

import Dropdown from '../Dropdown';

const Sort = props => {

    const [state, dispatch] = useContext(Context);

    const options = ['My Latest', 'Name', 'Rating', 'Release Date'];

    return (
        <div className='sort'>
            <div>Sort by: {state.sortBy}</div>
            <i className="fas fa-angle-down"></i>
            {
                props.mobile ? <Dropdown options={options} mobile={true} type='sort' /> : <Dropdown options={options} type='sort' />
            }
            
        </div>
    )
};

export default Sort;