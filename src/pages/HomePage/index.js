import React from 'react';
import { withRouter } from 'react-router-dom';

import './styles.css';

import { ReactComponent as Controller } from '../../assets/svg/controller.svg';
import { ReactComponent as Title } from '../../assets/svg/title.svg';


const HomePage = props => {

    return (
        <div className='homepage'>
            <div className='background-image'>

            </div>
            {/* <div className='title'><Title /></div> */}
            <div className='list-of-games' onClick={() => props.history.push('/games')}>
                Games List
            </div>
            {/* <div  className='controller-svg'><Controller /></div> */}
        </div>
    )
};

export default withRouter(HomePage);