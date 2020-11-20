import React, { useState, useContext } from 'react';
import { Context } from '../../store/Store';

import './styles.css';

import GameBox from '../GameBox';

const GamesList = props => {

    const [state, dispatch] = useContext(Context);

    const { games } = props;

    const renderGames = () => {

        if (state.sortBy === 'Latest') {

            return games.map(game => {
                return <GameBox key={game.id} game={game} />
            })
        } else if (state.sortBy === 'Rating') {

            return games.map(el => el).sort((a, b) => b.rating - a.rating).map(game => {
                return <GameBox key={game.id} game={game} />
            })
        } else if (state.sortBy === 'Release Date') {

            return games.map(el => el).sort((a, b) => new Date(b.released) - new Date(a.released)).map(game => {
                return <GameBox key={game.id} game={game} />
            })
        }
        // } else if (state.sortBy === 'Release Date') {
        //     games.sort((a, b) => b.rating - a.rating).map(game => {
        //         return <GameBox key={game.id} game={game} />
        //     })
        // }

        

    }

    return (

        <div className='games-list'>

            
            {renderGames()}
            

        </div>
    )
};

export default GamesList;