import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../store/Store';
import axios from 'axios';

import './styles2.css';

import { useOuterClick } from '../../hooks/OuterClick';

import GamesList from '../../components/GamesList';
import Spinner from '../../components/Spinner';
import Sort from '../../components/Sort';
import SearchInput from '../../components/SearchInput';
import YearFilter from '../../components/YearFilter';
import GenreFilter from '../../components/GenreFilter';

const GamesPage = props => {

    const [state, dispatch] = useContext(Context);

    const { setPageHeight } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [filtersMenu, setFiltersMenu] = useState(false);

    const innerRef = useOuterClick(e => {
        if (filtersMenu) setFiltersMenu(false);
    })

    useEffect(() => {
        //setPageHeight();

        dispatch({ type: "CLEAR_FILTERS" });

        const getGames = async () => {

            try {
                const results = await axios.get('https://rawg.io/api/users/tiberu05/games')

                // if (isLoading) setGames(results.data.results);
                if (isLoading) dispatch({ type: "GET_GAMES", payload: results.data.results})

                setIsLoading(false);
    
                //props.setPageHeight()
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
                
                <div className='filters-button' onClick={() => setFiltersMenu(!filtersMenu)}>
                    <i className="fas fa-filter"></i>
                    <span>Filters</span>
                </div>
                <div className='heading-primary'>
                    <Sort mobile={false} />
                    <SearchInput mobile={false} />
                    <YearFilter mobile={false} />
                    <GenreFilter mobile={false} />
                </div>
                
            </div>

            <div className='mobile-filters-menu' ref={innerRef} style={{ 'display': `${filtersMenu ? 'flex' : 'none'}`}}>
                {/* <div className='close-filters-menu'><span className='x' onClick={() => setFiltersMenu(false)}>X</span></div> */}
                <SearchInput mobile={true} />
                <Sort mobile={true} />
                <YearFilter mobile={true} />
                <GenreFilter mobile={true} />
            </div>

            

            
            {
                isLoading ? <Spinner /> : <GamesList filtersMenu={filtersMenu} setPageHeight={setPageHeight} />
            }
         

        </div>
    )
};

export default GamesPage;