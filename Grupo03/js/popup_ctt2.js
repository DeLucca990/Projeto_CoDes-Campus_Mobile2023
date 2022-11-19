document.addEventListener('DOMContentLoaded', function(){

    atencao=document.getElementById('aten')
    reportar=document.getElementById('report')
    popup=document.querySelectorAll('.popup-wrapper')
    sim=document.querySelector('.popup-sim')
    nao=document.querySelector('.popup-nao')

    atencao.addEventListener('click', function(){
        popup[0].style.display='block'
    })
    reportar.addEventListener('click', function(){
        popup[1].style.display='block'
    })

    sim.addEventListener('click', function(){
        popup[1].style.display='none'
    })

    nao.addEventListener('click', function(){
        popup[1].style.display='none'
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