import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.css';

import GamesList from '../../components/GamesList';
import Spinner from '../../components/Spinner';
import Sort from '../../components/Sort';

const GamesPage = props => {

    const { setPageHeight } = props;
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setPageHeight();

        const getGames = async () => {

            try {
                const results = await axios.get('https://rawg.io/api/users/tiberu05/games')

                if (isLoading) setGames(results.data.results);

                setIsLoading(false);
    
                props.setPageHeight()
            } catch(err) {
                console.log(err)
            }
            
        }

        getGames();

        return () => setIsLoading(false);

    }, []);


    return (
        <div className='games-area'>
            <div className='games-area__header'>
                <div className='heading-primary'>
                    <Sort />
                </div>
                
            </div>

            

            
            {
                isLoading ? <Spinner /> : <GamesList games={games} setPageHeight={setPageHeight} />
            }
         

        </div>
    )
};

export default GamesPage;