import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.css';

import Spinner from '../../components/Spinner';

const GameDetail = props => {

    const [game, setGame] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {

        window.scrollTo(0, 0);

        const getGame = async () => {
            try {
                const result = await axios.get(`https://rawg.io/api/games/${props.match.params.game}`);

                setIsLoading(false);

                setGame(result.data);
            } catch (err) {
                console.log(err);
            }

        }

        getGame();
        
    }, [])

    return (
        <div>
            {
                isLoading ? <Spinner /> : (
                    <div className='game-detail'>
                        <img className='game-detail__img' src={game.background_image} alt={game.name} />
                        <div className='game-detail__about'>
                            <h1 className='game-detail__title'>{game.name}</h1>
                            <div className='game-detail__description detail-info'>{game.description_raw}</div>
                            <div className='game-detail_rating detail-info'>
                                <h3>Rating</h3>
                                <div style={{'marginTop': '5px'}}>{game.rating} / 5</div>
                            </div>
                            <div className='detail-info'>
                                <h3>Genre(s)</h3>
                                <div className='game-detail__genres'>
                                    {
                                        !game.genres ? null : game.genres.map(el => <div key={el.id}>{el.name}</div>)
                                    }
                                </div>
                            </div>
                            <div className='game-detail__website detail-info'>
                                <h3>Official Website</h3>
                                <a href={`${game.website}`}>{game.website}</a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
};

export default GameDetail;