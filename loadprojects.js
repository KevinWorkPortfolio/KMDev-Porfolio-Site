const container = document.querySelector('.projects-container');

fetch('projects.json')
  .then(res => res.json())
  .then(projects => {
    projects.forEach(p => {
      container.innerHTML += `
        <div class="project-card">
          <img src="${p.image}" alt="${p.title}">
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
  });