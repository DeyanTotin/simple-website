


document.addEventListener('DOMContentLoaded', function () {
    var birthday = new Date('2004/10/25');
    var today = new Date();
    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    document.getElementById('age').textContent = age;
});

