export const filterGames = (arr, input, yearFilter, genreFilter) => {
    let filteredArray = arr.map(el => el);

    if (input && input.length > 2) {
        
        filteredArray = filteredArray.filter(el => el.name.toLowerCase().includes(input.toLowerCase()));
        if (yearFilter.length === 0 && genreFilter.length === 0) {
            return filteredArray;
        }
    }

    let nextFilteredArray = [];

    if (yearFilter.length > 0) {

            yearFilter.sort((a, b) => b - a).forEach(year => {
                filteredArray.forEach(el => {
                    if (el.released.substring(0, 4) === year) nextFilteredArray.push(el);
                })
            })

            if (genreFilter.length === 0) {
                
                return nextFilteredArray;
            }
    }

    let genreFilteredArray = [];

    if (genreFilter.length > 0) {

        if (yearFilter.length > 0) {

            nextFilteredArray.forEach(el => {

                genreFilter.forEach(genre => {

                    const index = genreFilteredArray.indexOf(el);
            
                    for (let i = 0; i < el.genres.length; i++) {
                        if (el.genres[i].name === genre && index === -1) {
                            genreFilteredArray.push(el);
                            break;
                        }
                    }
                    
                })

                
            })

            return genreFilteredArray;

        } else {

            genreFilteredArray = [];

            genreFilter.forEach(genre => {

                filteredArray.forEach(el => {
                
                    const index = genreFilteredArray.indexOf(el);
            
                    el.genres.forEach(gameGenre => {
                        if (gameGenre.name === genre && index === -1) genreFilteredArray.push(el);
                    })
                })
            
                
            })

            return genreFilteredArray;

    }
        
    }
    
    return arr;
};