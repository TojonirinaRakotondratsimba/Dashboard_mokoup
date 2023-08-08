let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function (){
    body.classList.toggle('open');
})

const btnNav = document.querySelectorAll('.btn-nav');
btnNav.forEach(btn => {
    btn.addEventListener('click', () => {
        body.classList.toggle('open');
    })
})
