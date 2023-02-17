document.addEventListener('DOMContentLoaded', function(){
    info_paci=document.querySelector('.info_paci')
    info_tut=document.querySelector('.info_tut')
    info_ctt=document.querySelector('.info_ctt')
    info_gerais=document.querySelectorAll('.cab')
    popup=document.querySelectorAll('.popup-wrapper')

    info_paci.addEventListener('click', function(){
        popup[0].style.display='block'
    })

    info_tut.addEventListener('click', function(){
        popup[1].style.display='block'
    })

    info_ctt.addEventListener('click', function(){
        popup[2].style.display='block'
    })

    info_gerais[0].addEventListener('click', function(){
        popup[3].style.display='block'
    })
    info_gerais[1].addEventListener('click', function(){
        popup[3].style.display='block'
    })
    info_gerais[2].addEventListener('click', function(){
        popup[3].style.display='block'
    })

    popup[0].addEventListener('click', function(event){
        const classNameOfClickedElement=event.target.classList[0]
        if (classNameOfClickedElement==='popup-wrapper'){
            popup[0].style.display='none'
        }
    })

    popup[1].addEventListener('click', function(event){
        const classNameOfClickedElement=event.target.classList[0]
        if (classNameOfClickedElement==='popup-wrapper'){
            popup[1].style.display='none'
        }
    })

    popup[2].addEventListener('click', function(event){
        const classNameOfClickedElement=event.target.classList[0]
        if (classNameOfClickedElement==='popup-wrapper'){
            popup[2].style.display='none'
        }
    })

    popup[3].addEventListener('click', function(event){
        const classNameOfClickedElement=event.target.classList[0]
        if (classNameOfClickedElement==='popup-wrapper'){
            popup[3].style.display='none'
        }
    })

    const menu = document.querySelector(".menu");
    const overlay = document.querySelector(".overlay");
    const toggleButton = document.querySelector(".toggle-button");

    toggleButton.addEventListener('click', function(){
        overlay.classList.toggle("open")
        menu.classList.toggle("open")
    })

    overlay.addEventListener("click", (event) => {
        if (!menu.contains(event.target)) {
          menu.classList.remove("open");
          overlay.classList.remove("open");
        }
    })


    const slider = document.querySelector('.slider');

    slider.addEventListener('change', (event) => {
    if (event.target.value === event.target.max) {
        console.log('Botão deslizante chegou ao fim!');
    } else {
        event.target.value = 0;
    }
    });
})
