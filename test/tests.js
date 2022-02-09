// IMPORT MODULES under test here:
import { renderMovieLink } from '../render-utils.js';
import { renderMovieInfo } from '../render-utils.js';
import { coenMovies } from '../data.js';

const movie = coenMovies[1];

console.log(movie, 'movie');

const test = QUnit.test;

test('renderMovieInfo should return html for movie info', (expect) => {
    const expected = `<div id="movie-info-display"><h1>BARTON FINK</h1><h2>1991</h2><div class="image-quote-cast"><div class="image-quote-cast-section"><ul><span>CAST</span><li>John Turturro</li><li>John Goodman</li><li>Tony Shalhoub</li><li>Steve Buscemi</li></ul></div><div class="image-quote-cast-section"><img class="movie-image" src="../assets/barton-fink.jpg"></div><div class="image-quote-cast-section" id="quote"><h2>NOTABLE QUOTE:</h2><p>"I gotta tell ya, the life of the mind, there's no road map for that kinda territory, and exploring it can be painful."</p></div></div></div>`;
    const actual = renderMovieInfo(movie);

    expect.equal(actual.outerHTML, expected);
});

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
