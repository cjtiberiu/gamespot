import React from 'react';

import './styles2.css';

import {ReactComponent as Controller} from '../../assets/svg/controller.svg';

const Spinner = () => {

    return (
        <div className='spinner-overlay'>
            <div className='spinner-container'>
                <Controller />
            </div>
        </div>
    )
};

export default Spinner;