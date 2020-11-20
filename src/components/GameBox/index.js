import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Image from '../../assets/img/first-cover.jpg';

const GameBox = props => {

    const { game } = props;

    return (
        <Link to={`/games/${game.slug}`}>
            <div className='game'>
                <div className='overlay'>
                    <div className='text'>See more game details</div>
                </div>
                <img className='game-img' src={game.background_image} />
                <div className='game-content'>
                    <h2 className='game-title'>{game.name}</h2>
                    <div className='game-releasedate info'>Released: {game.released}</div>
                    <div className='info'>Rating: <span className='game-rating'>{game.rating}</span> out of 5</div>

                </div>
            </div>
        </Link>
    )
};

export default GameBox;