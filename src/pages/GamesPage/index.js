import React, { useEffect } from 'react';

import './styles.css';

import GamesList from '../../components/GamesList';

const GamesPage = props => {

    const { setPageHeight } = props;

    useEffect(() => {
        setPageHeight();
    }, [])

    return (
        <div className='games-area'>

            <div className='heading-primary'>Our Games</div>
            <GamesList setPageHeight={setPageHeight} />

        </div>
    )
};

export default GamesPage;