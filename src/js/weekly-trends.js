import { getWeeklyTrending } from './api/movies-api.js';

const movieGrid = document.getElementById('movie-grid');

export async function initWeeklyTrends() {
  if (!movieGrid) return;

  try {
    // API'den trend filmleri çekiyoruz
    const movies = await getWeeklyTrending();

    if (movies && movies.length > 0) {
      // İlk 3 filmi gösteriyoruz
      displayMovies(movies.slice(0, 3));
    }
  } catch (error) {
    console.error('Trend verileri yüklenirken hata oluştu:', error);
  }
}

function displayMovies(movies) {
  movieGrid.innerHTML = movies
    .map(movie => {
      // Film çıkış yılı bilgisini alıyoruz (Yoksa varsayılan 2023 yazıyoruz)
      const releaseYear = movie.release_date
        ? movie.release_date.split('-')[0]
        : '2023';

      // Önemli: CSS'deki .weekly-trends__info yapısına uygun HTML
      return `
        <div class="weekly-trends__item">
            <div class="weekly-trends__card">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" loading="lazy">
                
                <div class="weekly-trends__info">
                    <div class="weekly-trends__text">
                        <div class="weekly-trends__movie-title">${movie.title}</div>
                        <div class="weekly-trends__movie-meta">Drama, Action | ${releaseYear}</div>
                    </div>
                    <div class="weekly-trends__stars" aria-label="Rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                </div>
            </div>
        </div>
    `;
    })
    .join('');
}

// Sayfa yüklendiğinde fonksiyonu çalıştır
initWeeklyTrends();
