import React, { useState, useContext } from 'react';
import { Context } from '../../store/Store';
import { useHistory } from 'react-router-dom';

import './styles2.css';

import {ReactComponent as Ps4Logo} from '../../assets/svg/ps4.svg';
import {ReactComponent as Ps5Logo} from '../../assets/svg/ps5.svg';

import Image from '../../assets/img/first-cover.jpg';

const GameBox = props => {

    const history = useHistory();
    const [state, dispatch] = useContext(Context);

    const { game, filtersMenu } = props;

    const formatDate = (date) => {
        const d = new Date(date);
        return d.getDate() + '.' +  (d.getMonth() + 1) + '.' +  d.getFullYear();
    }

    return (
            // <div key={game.id} className='game' onClick={() => props.filtersMenu ? null : history.push(`games/${game.slug}`)}>
            <div key={game.id} className='game' onClick={() => props.filtersMenu ? null : dispatch({ type: 'SHOW_MODAL', payload: game })}>
                
                {/* <div className='platform-icons'>
                            {
                                game.platforms.map(el => {
                                    if (el.platform.id === 187) {
                                        return <div key={el.platform.id} className='platform-icon'><Ps5Logo /></div>
                                    }
                                })
                            }
                            </div> */}
                <img className='game-img' src={game.background_image} />
                <div className='game-content'>
                    <h2 className='game-title'>{game.name}</h2>
                    {/* {
                                game.platforms.map(el => {
                                    if (el.platform.id === 187) {
                                        return <div key={el.platform.id} className='platform-icon'><Ps5Logo /></div>
                                    }
                                })
                            } */}
                    <div className='game-releasedate info'><span className='info-span'>Released:</span>  <span className='info-span-data'>{formatDate(game.released)}</span></div>
                    <div className='info'><span className='info-span'>RAWG Rating: </span><span className='info-span-data'><span className='game-rating'>{game.rating}</span> / 5</span></div>

                </div>
            </div>
    )
};

export default GameBox;