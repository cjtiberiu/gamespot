import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../store/Store';
import Dropdown from '../Dropdown';

import './styles.css';

const GenreFilter = props => {

    const [state, dispatch] = useContext(Context);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const getGenres = () => {

            const genresArray = [];
            
            state.games.forEach(el => {
                el.genres.forEach(genre => {
                    const index = genresArray.indexOf(genre.name);
                    if (index === -1) {
                        genresArray.push(genre.name);
                    }
                })
            })

            setGenres(genresArray);

        }

        getGenres();
            

    }, [state.games]);

    return (
        <div className='genre-filter'>
            <div>Genre</div>
            <i className="fas fa-angle-down"></i>
            {
                !props.mobile ? <Dropdown options={genres} type='genre' /> : <Dropdown options={genres} mobile={true} type='genre' />
            }
        </div>
    )
};

export default GenreFilter;