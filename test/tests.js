// IMPORT MODULES under test here:
import { renderMovieLink } from '../render-utils.js';
import { coenMovies } from '../data.js';

const movie = coenMovies[1];

console.log(movie, 'movie');

const test = QUnit.test;

test('renderMovieLink should return movie link', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<a href="./movies/?id=2"><div class="movie-container"><img src="./assets/barton-fink.jpg"></div></a>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMovieLink(movie);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
