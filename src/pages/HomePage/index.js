import React from 'react';

import './styles.css';

import {ReactComponent as Controller} from '../../assets/svg/controller.svg'


const HomePage = () => {

    return (
        <div>
            <h1 className='title'>PS Gamespot</h1>
            <Controller />
        </div>
    )
};

export default HomePage;