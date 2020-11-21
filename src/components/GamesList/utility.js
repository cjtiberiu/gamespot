export const filterGames = (arr, input, yearFilter) => {
    let filteredArray = arr.map(el => el);

    if (input && input.length > 2) {
        filteredArray = filteredArray.filter(el => el.name.toLowerCase().includes(input.toLowerCase()));
        if (!yearFilter) {
            return filteredArray;
        }
    }

    if (yearFilter.length > 0) {

        let yearFilteredArray = [];

        yearFilter.sort((a, b) => b - a).forEach(year => {
            filteredArray.forEach(el => {
                if (el.released.substring(0, 4) === year) yearFilteredArray.push(el);
            })
        })
        return yearFilteredArray;
    }
    
    return arr;
};