// CSS
import './css/styles.css';
import './css/header.css';
import './css/weekly-trends.css';

// Header
import { initHeader } from './js/header';

// Hero
import './js/hero';
import './js/hero-tmdb';

// Sections
import './js/weekly-trends';
import './js/upcoming-this-month';

// Modals
import './js/modal';
import './js/pop-up-movie-card';
import './js/pop-up-trailer-card';

// Library
import './js/my-library';
import './js/my-library-hero';

// API (side-effect)
import './js/api/movies-api';

console.log('🎬 Cinemania Projesi Aktif');

// Header init (DOM zaten var olduğu için)
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
});