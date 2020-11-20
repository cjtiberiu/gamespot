import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.css';

const GameDetail = props => {

    const [game, setGame] = useState({});

    useEffect(()=> {
        const getGame = async () => {
            try {
                const result = await axios.get(`https://rawg.io/api/games/${props.match.params.game}`);

                console.log(result);

                setGame(result.data);
            } catch (err) {
                console.log(err);
            }

        }

        getGame();
        
    }, [])

    return (
        <div className='game-detail'>
            <h2>{game.name}</h2>
            <img className='game-detail__img' src={game.background_image} alt={game.name} />
            <div>{game.description_raw}</div>
        </div>
    )
};

export default GameDetail;