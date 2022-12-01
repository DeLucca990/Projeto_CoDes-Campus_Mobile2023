document.addEventListener('DOMContentLoaded', function(){
    info_paci=document.querySelector('.info_paci')
    info_tut=document.querySelector('.info_tut')
    info_ctt=document.querySelector('.info_ctt')
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
})