const Reducer = (state, action) => {
    switch(action.type) {
        case "GET_GAMES":
            return { ...state, games: action.payload };
        case "SET_SORT":
            return { ...state, sortBy: action.payload };
        case "SET_SEARCH":
            return { ...state, searchField: action.payload};
        case "SET_YEAR_FILTER":
            return { ...state, yearFilter: action.payload };
        case "SET_GENRE_FILTER":
            return { ...state, genreFilter: action.payload };
        case "CLEAR_FILTERS":
            return { ...state, searchField: '', yearFilter: [], genreFilter: [] };
        case "SET_LOADING_FALSE":
            return { ...state, loadingGames: false };
        default:
            return state;
    }
};

export default Reducer;