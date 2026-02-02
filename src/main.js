import './css/header.css';
import './css/my-library.css';
import { initHeader } from './js/header';
import { initMyLibrary } from './js/my-library';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMyLibrary();
});


