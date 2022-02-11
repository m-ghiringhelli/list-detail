import { coenMovies } from '../data.js';
import { findById } from '../utils.js';
import { renderMovieInfo } from '../render-utils.js';
const body = document.getElementById('main-body');

const params = new URLSearchParams(window.location.search);

const movie = findById(params.get('id'), coenMovies);

body.append(renderMovieInfo(movie));