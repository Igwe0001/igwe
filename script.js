const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('nav')
const line = document.querySelectorAll('.line')



hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-toggle')
    line.forEach(e => {
        e.classList.toggle('trans')
    })
})