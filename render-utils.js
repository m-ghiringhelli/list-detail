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

export function renderMovieInfo(movie) {
    const div = document.createElement('div');
    div.setAttribute('id', 'movie-info-display');
    const h1 = document.createElement('h1');
    h1.textContent = movie.name.toUpperCase();
    const h2 = document.createElement('h2');
    h2.textContent = movie.year;
    const div2 = document.createElement('div');
    div2.classList = 'image-quote-cast';
    const div3 = document.createElement('div');
    div3.classList = 'image-quote-cast-section';
    const ul = document.createElement('ul');
    const span = document.createElement('span');
    span.textContent = 'CAST';
    ul.append(span);
    for (let member of movie.cast) {
        const li = document.createElement('li');
        li.textContent = member;
        ul.append(li);
    }
    const div4 = document.createElement('div');
    div4.classList = 'image-quote-cast-section';
    const img = document.createElement('img');
    img.classList = 'movie-image';
    img.src = `../assets/${movie.image}`;
    const div5 = document.createElement('div');
    div5.classList = 'image-quote-cast-section';
    div5.setAttribute('id', 'quote');
    const h2_2 = document.createElement('h2');
    h2_2.textContent = 'NOTABLE QUOTE:';
    const p = document.createElement('p');
    p.textContent = `"${movie.quote}"`;
    div5.append(h2_2, p);
    div4.append(img);
    div3.append(ul);
    div2.append(div3, div4, div5);
    div.append(h1, h2, div2,);
    return div;
}