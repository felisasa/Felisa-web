let ruangan = document.getElementById('pict1');
let people = document.getElementById('pict2');
let welcomee = document.getElementById('pict3');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    ruangan.style.top = value * -1.5 + 'px';
    ruangan.style.right = value * 1.5 + 'px';
    people.style.top = value * -1.5 + 'px';
    people.style.left = value * -1.5 + 'px';
    welcomee.style.top = value * -1.5 + 'px';
    welcomee.style.left = value * 1.5 + 'px';
})