const GENRE_MAP = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  18: 'Drama',
  10749: 'Romance',
  878: 'Science Fiction',
  53: 'Thriller',
};

const loader = document.querySelector('.popup-loader');
const overlay = document.querySelector('.popup-modal-overlay');
const closeBtn = document.querySelector('.popup-modal-close');

const posterImg = document.querySelector('.popup-movie-poster img');
const titleEl = document.querySelector('.popup-movie-title');
const infoValues = document.querySelectorAll('.popup-movie-info .value');
const descriptionEl = document.querySelector('.popup-movie-description');

const LIBRARY_KEY = 'my-library';

function openMoviePopup(movie) {
  loader.classList.remove('is-hidden');

  posterImg.src = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '';
  posterImg.alt = movie.title || 'Movie poster';

  titleEl.textContent = movie.title || 'Unknown title';

  infoValues[0].textContent = movie.vote_average
    ? `${movie.vote_average} / ${movie.vote_count}`
    : 'N/A';

  infoValues[1].textContent = movie.popularity
    ? movie.popularity.toFixed(1)
    : 'N/A';

  infoValues[2].textContent = movie.genre_ids?.length
    ? movie.genre_ids.map(id => GENRE_MAP[id] || 'Other').join(', ')
    : 'Unknown';

  descriptionEl.textContent = movie.overview || 'No description available.';

  overlay.classList.add('is-active');

  libraryBtn.textContent = isInLibrary(movie.id)
    ? 'Remove from My Library'
    : 'Add to My Library';

  libraryBtn.onclick = () => toggleLibrary(movie);
  loader.classList.add('is-hidden');
}

function closeMoviePopup() {
  overlay.classList.remove('is-active');
}

const libraryBtn = document.querySelector('.popup-add-library-btn');

function getLibrary() {
  return JSON.parse(localStorage.getItem(LIBRARY_KEY)) || [];
}

function isInLibrary(id) {
  return getLibrary().some(movie => movie.id === id);
}

function toggleLibrary(movie) {
  let library = getLibrary();

  if (isInLibrary(movie.id)) {
    library = library.filter(item => item.id !== movie.id);
    libraryBtn.textContent = 'Add to My Library';
  } else {
    library.push(movie);
    libraryBtn.textContent = 'Remove from My Library';
  }

  localStorage.setItem(LIBRARY_KEY, JSON.stringify(library));
}

closeBtn.addEventListener('click', closeMoviePopup);

overlay.addEventListener('click', e => {
  if (e.target === overlay) closeMoviePopup();
});

export { openMoviePopup };

document.addEventListener('DOMContentLoaded', () => {
  overlay.classList.add('is-active');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    overlay.classList.remove('is-active');
  }
});
