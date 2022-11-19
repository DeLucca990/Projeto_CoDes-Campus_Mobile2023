document.addEventListener('DOMContentLoaded', function(){

    report=document.querySelector('.img_rodape_dir')
    popup=document.querySelector('.popup-wrapper')
    sim=document.querySelector('.popup-sim')
    nao=document.querySelector('.popup-nao')

    report.addEventListener('click', function(){
        popup.style.display='block'
    })

    sim.addEventListener('click', function(){
        popup.style.display='none'
    })

    nao.addEventListener('click', function(){
        popup.style.display='none'
    })

    popup.addEventListener('click', function(event){
        const classNameOfClickedElement=event.target.classList[0]
        if (classNameOfClickedElement==='popup-wrapper'){
            popup.style.display='none'
        }
    })

})