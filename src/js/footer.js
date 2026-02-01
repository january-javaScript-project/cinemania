const teamMembers = [
  {
    name: 'Ali Hamza',
    role: 'Developer',
    github: 'https://github.com/MRMARUL',
  },
  {
    name: 'Aslı Erdal',
    role: 'Developer',
    github: '', // GitHub not available yet
  },
  {
    name: 'Burak Gökay',
    role: 'Developer',
    github: 'https://github.com/bgokay007-tech',
  },
  {
    name: 'Çiğdem Ergal',
    role: 'Team Lead',
    github: 'https://github.com/CigdemErgal',
  },
  {
    name: 'Halenur Gürel',
    role: 'Scrum Master',
    github: 'https://github.com/halenurgurel',
  },
  {
    name: 'Kerem Yıldırım',
    role: 'Developer',
    github: 'https://github.com/keremyldrm61',
  },
  {
    name: 'Kutluhan Gül',
    role: 'Developer',
    github: 'https://github.com/kutluhangil',
  },
  {
    name: 'Nur Seda Ağgünlü',
    role: 'Developer',
    github: 'https://github.com/nursedaaggunlu',
  },
  {
    name: 'Yusuf Soylu',
    role: 'Developer',
    github: 'https://github.com/soylu1092',
  },
  {
    name: 'Zehra Yazıcı',
    role: 'Developer',
    github: 'https://github.com/zehrayazici',
  },
];

const footerLink = document.querySelector('.footer-link');
const body = document.querySelector('body');

// Create modal markup
const modalMarkup = `
  <div class="team-modal-backdrop is-hidden" id="team-modal">
    <div class="team-modal">
      <button type="button" class="team-modal-close" aria-label="Close modal">
        &times;
      </button>
      <h2 class="team-modal-title">Our Team</h2>
      <ul class="team-list">
        <!-- Team members will be injected here -->
      </ul>
    </div>
  </div>
`;

// Inject modal into DOM
document.body.insertAdjacentHTML('beforeend', modalMarkup);

const backdrop = document.getElementById('team-modal');
const closeBtn = document.querySelector('.team-modal-close');
const teamList = document.querySelector('.team-list');

// Function to create team member card
function createTeamMemberCard(member) {
  const githubLink = member.github
    ? `<a href="${member.github}" target="_blank" rel="noopener noreferrer" class="member-github">GitHub</a>`
    : `<span class="member-github disabled">GitHub N/A</span>`;

  return `
    <li class="team-member">
      <div class="member-avatar-placeholder"></div> 
      <h3 class="member-name">${member.name}</h3>
      <p class="member-role">${member.role}</p>
      ${githubLink}
    </li>
  `;
}

// Open modal
function openModal(e) {
  e.preventDefault();

  // Render team members if empty
  if (teamList && teamList.children.length === 0) {
    const membersMarkup = teamMembers.map(createTeamMemberCard).join('');
    teamList.innerHTML = membersMarkup;
  }

  backdrop.classList.remove('is-hidden');
  body.style.overflow = 'hidden'; // Prevent scrolling

  // Add event listeners for closing
  window.addEventListener('keydown', onEscPress);
  backdrop.addEventListener('click', onBackdropClick);
  closeBtn.addEventListener('click', closeModal);
}

// Close modal
function closeModal() {
  backdrop.classList.add('is-hidden');
  body.style.overflow = ''; // Restore scrolling

  // Remove event listeners
  window.removeEventListener('keydown', onEscPress);
  backdrop.removeEventListener('click', onBackdropClick);
  closeBtn.removeEventListener('click', closeModal);
}

// Close on ESC
function onEscPress(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

// Close on backdrop click
function onBackdropClick(e) {
  if (e.target === backdrop) {
    closeModal();
  }
}

// Attach event listener to footer link
if (footerLink) {
  footerLink.addEventListener('click', openModal);
}
