import React, { useState, useContext } from 'react';
import { Context } from '../../store/Store';

import './styles.css';

const SortDropdown = props => {

    const { options, type } = props;

    const [state, dispatch] = useContext(Context);
    const [years, setYears] = useState([])

    const handleClick = (el) => {
        if (type === 'sort') {
            dispatch({ type: 'SET_SORT', payload: el})
        } else if (type === 'year') {
            dispatch({ type: 'SET_YEAR_FILTER', payload: el })
        }
    };

    console.log(years);

    const handleCheckbox = (e) => {
        const yearsArray = years.map(el => el);
        if (e.target.checked) {
            yearsArray.push(e.target.value);
            setYears(yearsArray);
        }

        if (!e.target.checked) {
            const removeFromArray = yearsArray.map(el => el).filter(el => el !== e.target.value)
            setYears(removeFromArray)
        }
        
    }

    return (
        <div className='dropdown'>
            {
                type === 'sort' ? (
                    options.map(el => {
                        return <div key={el} className='dropdown-option' onClick={() => handleClick(el)}>{el}</div>
                    })
                ) : null
            }
            {
                type === 'year' ? (
                    options.map(el => {
                        return (

                            <label key={el} className="checkbox-container">{el}
                                <input className='checkbox' type='checkbox' value={el} name={el} onChange={e => handleCheckbox(e)} />
                                <span className="checkmark"></span>
                            </label>
                        )
                    })
                ) : null
            }
                
                
            
        </div>
    )
};

export default SortDropdown;