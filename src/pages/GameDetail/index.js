import React, { useState, useEffect, useContext, useRef } from 'react';
import { Context } from '../../store/Store';
import axios from 'axios';

import './styles2.css';
import { SmallImage } from './styles';

import Spinner from '../../components/Spinner';

const GameDetail = props => {

    const [state, dispatch] = useContext(Context);
    const [game, setGame] = useState({});
    const [extraInfo, setExtraInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const smallImage = useRef();

    const [background, setBackground] = useState('');

    useEffect(()=> {

        window.scrollTo(0, 0);

        const extra = state.games.find(el => el.slug === props.match.params.game);

        setExtraInfo(extra);

        const getGame = async () => {
            try {
                const result = await axios.get(`https://rawg.io/api/games/${props.match.params.game}`);

                setIsLoading(false);

                setGame(result.data);

                setBackground(result.data.background_image);
            } catch (err) {
                console.log(err);
            }

        }

        getGame();
        
    }, [state.games])

    const changeBackground = image => {
        setBackground(image);
    }

    return (
        <div>
            {
                isLoading ? <Spinner /> : (
                    <div className='game-detail'>
                        <div className='background-img'></div>
                        <div className='game-detail__left-container'>
                            <h1 className='mobile-game-title'>{game.name}</h1>
                            <img className='game-detail__img' src={background} alt={game.name} />
                            <div className='game-detail__images'>
                            
                            {
                                !extraInfo ? null : (
                                    extraInfo.short_screenshots.map(el => {
                                        if (el.image === background) {
                                            return <SmallImage ref={smallImage} key={el.id} className='game-detail__smallimg active-image' src={el.image} alt={el.image} onClick={() => changeBackground(el.image)} />
                                        }
                                        return <SmallImage ref={smallImage} key={el.id} className='game-detail__smallimg' src={el.image} alt={el.image} onClick={() => changeBackground(el.image)} />
                                    })
                                )
                            }

                            </div>

                        </div>
                        
                        <div className='game-detail__about'>
                            <h1 className='game-detail__title'>{game.name}</h1>
                            <div className='game-detail__description detail-info'>{game.description_raw}</div>
                            <div className='detail-info'>
                                <h3>Developed by</h3>
                                <div className='game-detail__genres'>
                                    {
                                        !game.developers ? null : game.developers.map(el => <div key={el.id}>{el.name}</div>)
                                    }
                                </div>
                            </div>
                            <div className='detail-info'>
                                <h3>Published by</h3>
                                <div className='game-detail__genres'>
                                    {
                                        !game.publishers ? null : game.publishers.map(el => <div key={el.id}>{el.name}</div>)
                                    }
                                </div>
                            </div>
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