let burger = document.querySelector('.burger')
const biodataSection = document.querySelector('.biodata')
burger.addEventListener('click',(event) => {
biodataSection.classList.toggle('inactive')
})