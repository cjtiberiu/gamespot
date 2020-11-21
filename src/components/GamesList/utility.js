export const filterGames = (arr, input, yearFilter) => {
    let filteredArray = arr.map(el => el);

    if (input && input.length > 2) {
        filteredArray = filteredArray.filter(el => el.name.toLowerCase().includes(input.toLowerCase()));
        if (!yearFilter) {
            return filteredArray;
        }
    }

    if (yearFilter) {
        if (yearFilter !== 'All time') {
            filteredArray = filteredArray.filter(el => el.released.substring(0, 4) === yearFilter);
        }
        return filteredArray;
    }
    
    return arr;
};