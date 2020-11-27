import React, { useContext } from 'react';
import { Context } from '../../store/Store';

import './styles.css';

import Sort from '../Sort';
import SearchInput from '../SearchInput';
import YearFilter from '../YearFilter';
import GenreFilter from '../GenreFilter';

const FiltersArea = props => {

    const [state, dispatch] = useContext(Context);

    const { mobile, filtersMenu, innerRef } = props;

    return (
        <div>

        {
            !mobile ? (

                <div className='filters-area'>

                    <Sort mobile={mobile} />
                    <SearchInput mobile={mobile} />
                    <YearFilter mobile={mobile} />
                    <GenreFilter mobile={mobile} />
    
                </div>
            ) : (
                <div className='mobile-filters-menu' ref={innerRef} style={{ 'display': `${filtersMenu ? 'flex' : 'none'}`}}>

                    <SearchInput mobile={mobile} />
                    <Sort mobile={mobile} />
                    <YearFilter mobile={mobile} />
                    <GenreFilter mobile={mobile} />

                </div>
            )
        }

        </div>
        
    )
};

export default FiltersArea;