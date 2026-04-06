const container = document.querySelector('.project-grid');

if (!container) {
  console.error("Container .project-grid non trovato!");
} else {
  fetch('projects.json')
    .then(res => res.json())
    .then(projects => {
      projects.forEach(p => {
        container.innerHTML += `
          <div class="project-card">
            <div class="project-content">
              <h3>${p.title}</h3>
              <div class="project-links">
                <a href="${p.github}" target="_blank" class="btn">GitHub Repo</a>
                <a href="${p.download}" target="_blank" class="btn">Download ZIP</a>
              </div>
            </div>
          </div>
        `;
      });
    })
    .catch(err => console.error("Errore nel caricamento:", err));
}
