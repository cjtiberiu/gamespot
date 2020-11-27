import React, { useState, useContext } from 'react';
import { Context } from '../../store/Store';

import './styles.css';

import { filterGames } from './utility';

import GameBox from '../GameBox';

const GamesList = props => {

    const [state, dispatch] = useContext(Context);

    const { games } = state;

    console.log('GAMELIST RENDER');

    const renderGames = () => {

        console.log(state.games);

        const filteredGames = filterGames(games, state.searchField, state.yearFilter, state.genreFilter);

        if (filteredGames.length === 0) {

            return <div className='no-games'>There are no games to show</div>

        } else {

            // if (state.sortBy === 'Our Latest') {

            //     return filteredGames.map(el => el).sort((a, b) => b.myDate - a.myDate).map(game => {
            //         return <GameBox filtersMenu={props.filtersMenu} key={game.id} game={game} />
            //     })
            if (state.sortBy === 'Rating') {
    
                return filteredGames.map(el => el).sort((a, b) => b.rating - a.rating).map(game => {
                    return <GameBox filtersMenu={props.filtersMenu} key={game.id} game={game} />
                })
            } else if (state.sortBy === 'Release Date') {
    
                return filteredGames.map(el => el).sort((a, b) => new Date(b.released) - new Date(a.released)).map(game => {
                    return <GameBox filtersMenu={props.filtersMenu} key={game.id} game={game} />
                })
            } else if (state.sortBy === 'Name') {

                return filteredGames.map(el => el).sort((a, b) => {
                    let nameA = a.name.toLowerCase();
                    let nameB = b.name.toLowerCase();
                    if (nameA < nameB) return -1;
                    if (nameB > nameA) return 1;
                    return 0;
                }).map(game => {
                    return <GameBox filtersMenu={props.filtersMenu} key={game.id} game={game} />
                })
            }
        }

    }

    return (

        <div className='games-list'>

            
            {renderGames()}
            

        </div>
    )
};

export default GamesList;