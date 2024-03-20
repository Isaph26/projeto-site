/* Manipulação do menu responsivo */

const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.sideMenu img')

menuIcon.addEventListener('click', function(){
    //quando houver cllique no menu
    menu.classList.toggle('active')
})