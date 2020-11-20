import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.css';

import GameBox from '../GameBox';
import Axios from 'axios';

const GamesList = props => {

    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getGames = async () => {

            try {
                const results = await axios.get('https://rawg.io/api/users/tiberu05/games')

                if (isLoading) setGames(results.data.results);
    
                props.setPageHeight()
            } catch(err) {
                console.log(err)
            }
            
        }

        getGames();

        return () => setIsLoading(false);

    }, [])

    useEffect(() => {
        console.log(games);
    }, [games])

    const renderGames = () => {
        const render = games.map(game => {
            return <GameBox game={game} />
        })

        return render;
    }

    return (

        <div className='games-list'>

            {renderGames()}

        </div>
    )
};

export default GamesList;