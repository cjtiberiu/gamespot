import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const INITIAL_STATE = {
    sortBy: 'My Latest',
    searchField: '',
    yearFilter: [],
    genreFilter: [],
    games: [],
    loadingGames: true,
    selectedGame: {},
    showModal: false,
    modalLoading: true
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(INITIAL_STATE);

export default Store;