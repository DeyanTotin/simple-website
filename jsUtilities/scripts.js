document.addEventListener('DOMContentLoaded', function () {
    fetchProjects();
    window.addEventListener('resize', adjustMarginRight);
    adjustMarginRight();

    toggleDivVisibility()
    window.addEventListener('resize', toggleDivVisibility);
    moveLeftBox();
});



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


function toggleDivVisibility() {
    let screenWidth = window.innerWidth;
    let div = document.getElementById('right-box');

    if (screenWidth <= 1500) {
        div.classList.add('hidden');
    } else {
        div.classList.remove('hidden');
    }
}



document.addEventListener('DOMContentLoaded', function () {
    let clickArea = document.querySelector('#click-area-left');
    let rightBox = document.getElementById('right-box');

    
    clickArea.addEventListener('click', function (event) {

        rightBox.classList.toggle('hidden');
    });


    function toggleButtonClickability() {
        let screenWidth = window.innerWidth;

        if (screenWidth > 1500) {
            clickArea.style.display = 'none';
        } else {
            clickArea.style.display = 'block';
        }
    }

    toggleButtonClickability();

    window.addEventListener('resize', toggleButtonClickability);
});



function adjustMarginRight() {
    let windowWidth = window.innerWidth;
    let rightBox = document.getElementById('right-box');

    let desiredMargin = Math.max((windowWidth - 1370) / 4, 10);

    rightBox.style.marginRight = desiredMargin + 'px';
}

function moveLeftBox() {
    var leftBox = document.getElementById('left-box');
    var mainContent = document.getElementById('box-main-content');
    var parent = mainContent.parentNode;
    parent.insertBefore(leftBox, mainContent.nextSibling);
}
