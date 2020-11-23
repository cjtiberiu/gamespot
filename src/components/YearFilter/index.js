import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../store/Store';

import './styles.css';

import Dropdown from '../Dropdown';

const YearFilter = props => {

    const [state, dispatch] = useContext(Context);
    const [years, setYears] = useState([]);

    useEffect(() => {
        const getYears = () => {

            const yearsArray = [];
            
            state.games.forEach(el => {
                const index = yearsArray.indexOf(el.released.substring(0, 4));
                if (index === -1) {
                    yearsArray.push(el.released.substring(0, 4))
                }
            })

            setYears(yearsArray.sort((a, b) => b - a));

        }

        getYears();
            

    }, []);

    return (
        <div className='year-filter'>
            <div>Year</div>
            <i className="fas fa-angle-down"></i>
            <Dropdown options={years} type='year' />
        </div>
    )
}

export default YearFilter;