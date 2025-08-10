const mobileNavBtn = document.querySelector('.mobile-menu');

mobileNavBtn.addEventListener('click', (e)=>{
    e.currentTarget.classList.toggle('open');
    document.body.classList.toggle('no-scroll')
})