import React, { useState, useEffect, useContext, useRef } from 'react';
import { Context } from '../../store/Store';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Spinner from '../Spinner';
import { SmallImage } from './styles';

import { useOuterClick } from '../../hooks/OuterClick';

import './styles.css';
import './game-detail.css';

const GameModal = props => {

    const [state, dispatch] = useContext(Context);
    const [modalLoading, setModalLoading] = useState(true);
    const [background, setBackground] = useState('');
    const [game, setGame] = useState({});

    const smallImage = useRef();

    const innerRef = useOuterClick(e => {
        setTimeout(() => {
            if (state.showModal) dispatch({ type: 'HIDE_MODAL' })
        }, 100)
    });
    

    const { showModal, selectedGame } = state;

    useEffect(()=> {

        const getGame = async () => {

                try {

                    const result = await axios.get(`https://rawg.io/api/games/${state.selectedGame.slug}`);

                    setModalLoading(false);

                    setGame(result.data);

                    setBackground(result.data.background_image);
                    

                    
                } catch (err) {
                    throw err;
                }

        }

        if (state.selectedGame.slug !== undefined) {
            getGame();
        }
    
        

        return () => {
            setModalLoading(true);
        }
    
        
    }, [state.selectedGame, dispatch])

    
    const changeBackground = image => {
        setBackground(image);
    }

    if (!showModal) return null;

    return ReactDOM.createPortal(
        <div className={`modal-overlay ${showModal ? 'open' : ''}`}>
            <div className='game-modal' >

                <div className='close-modal' onClick={() => {
                    dispatch({type: 'HIDE_MODAL'})
                }}><i className="far fa-times-circle"></i></div>

                {
                    modalLoading ? <Spinner /> : (
                            
                        <div className='game-detail' ref={innerRef}>
                            

                            <div className='background-img'></div>
                            <div className='game-detail__left-container'>
                                <h1 className='mobile-game-title'>{selectedGame.name}</h1>
                                <img className='game-detail__img' src={background} alt={selectedGame.name} />
                                <div className='game-detail__images'>
                                
                                {
                                    
                                    selectedGame.short_screenshots.map(el => {
                                        if (el.image === background) {
                                            return <SmallImage ref={smallImage} key={el.id} className='game-detail__smallimg active-image' src={el.image} alt={el.image} onClick={() => changeBackground(el.image)} />
                                        }
                                        return <SmallImage ref={smallImage} key={el.id} className='game-detail__smallimg' src={el.image} alt={el.image} onClick={() => changeBackground(el.image)} />
                                    })
                                    
                                }

                                </div>

                            </div>
                            
                            <div className='game-detail__about'>
                                <h1 className='game-detail__title'>{selectedGame.name}</h1>
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
        </div>,
        document.querySelector('#modal')
    )
};

export default GameModal;