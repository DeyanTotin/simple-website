


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


document.addEventListener('DOMContentLoaded', function () {

    let links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let href = this.getAttribute('href');
            let element = document.querySelector(href);
            window.location.href = href;

        }());
    });

});