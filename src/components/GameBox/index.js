import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import Image from '../../assets/img/first-cover.jpg';

const GameBox = props => {

    const history = useHistory();

    const { game } = props;

    const formatDate = (date) => {
        const d = new Date(date);
        return d.getDate() + '-' +  (d.getMonth() + 1) + '-' +  d.getFullYear();
    }

    return (
            <div key={game.id} className='game' onClick={() => history.push(`games/${game.slug}`)}>
                <div className='overlay'>
                    <div className='text-box'>Game details</div>
                </div>
                <img className='game-img' src={game.background_image} />
                <div className='game-content'>
                    <h2 className='game-title'>{game.name}</h2>
                    <div className='game-releasedate info'>Released: {formatDate(game.released)}</div>
                    <div className='info'>Rating: <span className='game-rating'>{game.rating}</span> out of 5</div>

                </div>
            </div>
    )
};

export default GameBox;