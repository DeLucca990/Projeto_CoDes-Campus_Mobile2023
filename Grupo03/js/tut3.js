document.addEventListener('DOMContentLoaded', function(){
    info_1=document.querySelector('.info_1')
    info_2=document.querySelector('.info_2')
    popup=document.querySelectorAll('.popup-wrapper')

    info_1.addEventListener('click', function(){
        popup[0].style.display='block'
    })

    info_2.addEventListener('click', function(){
        popup[1].style.display='block'
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
})