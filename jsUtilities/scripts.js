


document.addEventListener('DOMContentLoaded', function () {
    let birthday = new Date('2004/10/25');
    let today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    let m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    document.getElementById('age').textContent = age;
});


document.addEventListener('DOMContentLoaded', function() {
    fetchProjects();
});

function fetchProjects() {
    fetch('https://api.github.com/users/DeyanTotin/repos')
    .then(response => response.json())
    .then(data => {
        displayProjects(data);
    })
    .catch(error => console.error('Error fetching data: ', error));
}

function displayProjects(repos) {
    const projectsContainer = document.getElementById('projects-container');
    
    repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    
    const newestRepos = repos.slice(0, 3);

    newestRepos.forEach(repo => {

        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        
        const projectHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description available'}</p>
            <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;
        projectElement.innerHTML = projectHTML;
        projectsContainer.appendChild(projectElement);
    });
}
