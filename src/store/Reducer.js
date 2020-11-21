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
        default:
            return state;
    }
};

export default Reducer;