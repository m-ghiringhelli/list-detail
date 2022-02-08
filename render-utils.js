export function renderMovieLink(movie) {
    const a = document.createElement('a');
    a.href = `./movies/?id=${movie.id}`;
    const div = document.createElement('div');
    div.classList = 'movie-container';
    const img = document.createElement('img');
    img.src = `./assets/${movie.image}`;
    div.append(img);
    a.append(div);
    return a;
}