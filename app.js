// import functions and grab DOM elements
import { renderMovieLink } from './render-utils.js';
import { coenMovies } from './data.js';

const main = document.querySelector('main');

for (let movie of coenMovies) {
    const movieImage = renderMovieLink(movie);
    main.append(movieImage);
}





// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
