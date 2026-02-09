<h1>🎬 CINEMANIA — Digital Movie Discovery Platform</h1>

<p><em>A modern, responsive movie discovery experience powered by real-time film data.</em></p>

<p>
  <strong>Cinemania</strong> is a fully responsive, multi-page web application developed as a collaborative
  group project within the <strong>GoIT Full Stack Developer Program</strong>.
  The platform allows users to discover trending movies, explore upcoming releases,
  manage a personal movie library, and view detailed movie information using real-time data from
  <strong>The Movie Database (TMDB) API</strong>.
</p>

<hr />

<h2>🌐 Live Demo</h2>
<p>
  👉 <a href="https://january-javascript-project.github.io/cinemania/" target="_blank" rel="noopener">
  GitHub Pages — Cinemania</a>
</p>

<hr />

<h2>📋 Table of Contents</h2>
<ol>
  <li><a href="#about-the-project">About the Project</a></li>
  <li><a href="#api-integration">API Integration</a></li>
  <li><a href="#core-features">Core Features (MVP)</a></li>
  <li><a href="#additional-features">Additional Features</a></li>
  <li><a href="#technical-requirements">Technical Requirements</a></li>
  <li><a href="#project-structure">Project Structure</a></li>
  <li><a href="#technologies-used">Technologies Used</a></li>
  <li><a href="#team-members">Team Members & Responsibilities</a></li>
  <li><a href="#screenshots">Screenshots</a></li>
  <li><a href="#license">License</a></li>
</ol>

<hr />

<h2 id="about-the-project">📖 About the Project</h2>
<p>
  Cinemania simulates a real-world movie discovery platform.
  Users can browse trending films, search movies by keyword or year,
  explore upcoming releases, and manage a personalized movie library.
</p>

<p>
  The application is designed with a <strong>Mobile-First</strong> approach and
  follows modern frontend best practices including semantic HTML,
  modular CSS architecture, and asynchronous JavaScript logic.
</p>

<hr />

<h2 id="api-integration">🎞️ API Integration</h2>
<p>
  Cinemania uses <strong>The Movie Database (TMDB)</strong> API as its primary data source.
</p>

<ul>
  <li>🔑 API Provider: <a href="https://www.themoviedb.org/" target="_blank" rel="noopener">themoviedb.org</a></li>
  <li>📚 Documentation: <a href="https://developer.themoviedb.org/docs" target="_blank" rel="noopener">TMDB Docs</a></li>
</ul>

<p><strong>Used Endpoints:</strong></p>
<ul>
  <li>Trending Movies (Daily & Weekly)</li>
  <li>Upcoming Movies</li>
  <li>Search Movies (by keyword & year)</li>
  <li>Movie Details</li>
  <li>Movie Videos (Trailers)</li>
  <li>Genres List</li>
</ul>

<hr />

<h2 id="core-features">✨ Core Features (MVP)</h2>

<h3>Responsive Layout 📱💻🖥️</h3>
<ul>
  <li><strong>Mobile:</strong> 320px+</li>
  <li><strong>Tablet:</strong> 768px+</li>
  <li><strong>Desktop:</strong> 1280px+</li>
</ul>

<h3>Header & Navigation</h3>
<ul>
  <li>Logo and navigation links (Home, Catalog, My Library)</li>
  <li>Mobile slide-in menu</li>
  <li>Theme switcher (Dark / Light)</li>
</ul>

<h3>Hero Section</h3>
<ul>
  <li>Random trending movie of the day</li>
  <li>Fallback hero when no data is available</li>
  <li>Buttons: <em>More Details</em> & <em>Watch Trailer</em></li>
</ul>

<h3>Movie Modal</h3>
<ul>
  <li>Poster, title, rating, popularity</li>
  <li>Scrollable description area</li>
  <li>Add / Remove from My Library</li>
  <li>Close via overlay, ESC, or close button</li>
</ul>

<h3>Footer</h3>
<ul>
  <li>Copyright information</li>
  <li>Project year</li>
  <li><strong>GoIT Students</strong> link opening a team modal</li>
  <li>Responsive team modal for all breakpoints</li>
</ul>

<hr />

<h2 id="additional-features">🚀 Additional Features</h2>
<ul>
  <li>Weekly Trends section</li>
  <li>Upcoming This Month feature</li>
  <li>Catalog page with server-side pagination</li>
  <li>Year-based movie filtering</li>
  <li>My Library with LocalStorage persistence</li>
  <li>Load More button</li>
  <li>Scroll-to-top button</li>
  <li>Global loader (spinner) for async requests</li>
</ul>

<hr />

<h2 id="technical-requirements">⚙️ Technical Requirements</h2>
<ul>
  <li>Semantic HTML5 structure</li>
  <li>Modern-normalize integrated</li>
  <li>Fonts added via <code>@font-face</code></li>
  <li>Optimized images for Retina displays</li>
  <li>All static assets located under <code>src/images</code></li>
  <li>Favicon included</li>
  <li>No console errors or logs</li>
  <li>Passed HTML & CSS validation</li>
  <li>PageSpeed score ≥ 80%</li>
  <li>Consistent naming conventions</li>
  <li>Published on GitHub Pages</li>
</ul>

<hr />

<h2 id="project-structure">🏗️ Project Structure</h2>
<pre>
src/
 ├── css/
 ├── js/
 ├── images/
 │   └── footer/
 ├── partials/
 ├── index.html
</pre>

<hr />

<h2 id="technologies-used">🛠️ Technologies Used</h2>
<ul>
  <li><strong>HTML5</strong></li>
  <li><strong>CSS3</strong> (Flexbox & Grid)</li>
  <li><strong>Vanilla JavaScript (ES6+)</strong></li>
  <li><strong>Vite</strong></li>
  <li><strong>Git & GitHub</strong></li>
  <li><strong>TMDB API</strong></li>
</ul>

<hr />

<h2 id="team-members">👥 Team Members & Responsibilities</h2>

<ul>
  <li><strong>Çiğdem Ergal</strong> — Team Lead — Header & Leadership</li>
  <li><strong>Halenur Gürel</strong> — Scrum Master — Hero & Scrum Management</li>
  <li><strong>Aslıhan Erdal</strong> — Upcoming This Month</li>
  <li><strong>Burak Gökay</strong> — Weekly Trends</li>
  <li><strong>Kerem Yıldırım</strong> — Catalog</li>
  <li><strong>Yusuf Soylu</strong> — Pagination</li>
  <li><strong>Nur Seda Ağgünlü</strong> — My Library</li>
  <li><strong>Ali Hamza Çakmak</strong> — Modals</li>
  <li><strong>Zehra Yazıcı</strong> — My Library Hero</li>
  <li><strong>Kutluhan Gül</strong> — Footer & Team Modal</li>
</ul>

<hr />

<h2 id="screenshots">📸 Screenshots</h2>

<p><strong>Desktop Views</strong></p>
<p>
  <img src="./src/readme/desktop_home.png" width="30%" />
  <img src="./src/readme/desktop_catalog.png" width="30%" />
  <img src="./src/readme/desktop_library.png" width="30%" />
</p>

<p><strong>Tablet & Mobile Views</strong></p>
<p>
  <img src="./src/readme/tablet_home.png" width="30%" />
  <img src="./src/readme/mobile_home.png" width="30%" />
  <img src="./src/readme/ui_kit.png" width="30%" />
</p>

<hr />

<h2 id="license">📜 License</h2>
<p>
  This project was created for <strong>educational purposes</strong> as part of the GoIT Full Stack Developer program.
  <br />
  © 2024 Cinemania — All rights reserved.
</p>
