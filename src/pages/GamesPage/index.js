import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../store/Store';
import axios from 'axios';

import './styles.css';

import GamesList from '../../components/GamesList';
import Spinner from '../../components/Spinner';
import Sort from '../../components/Sort';
import SearchInput from '../../components/SearchInput';
import YearFilter from '../../components/YearFilter';

const GamesPage = props => {

    const [state, dispatch] = useContext(Context);

    const { setPageHeight } = props;
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setPageHeight();

        const getGames = async () => {

            try {
                const results = await axios.get('https://rawg.io/api/users/tiberu05/games')

                // if (isLoading) setGames(results.data.results);
                if (isLoading) dispatch({ type: "GET_GAMES", payload: results.data.results})

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
                    <SearchInput />
                    <YearFilter />
                </div>
                
            </div>

            

            
            {
                isLoading ? <Spinner /> : <GamesList setPageHeight={setPageHeight} />
            }
         

        </div>
    )
};

export default GamesPage;