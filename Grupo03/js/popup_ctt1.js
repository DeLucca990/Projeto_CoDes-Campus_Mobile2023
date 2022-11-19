document.addEventListener('DOMContentLoaded', function(){

    alerta=document.querySelector('.img_alerta')
    popup=document.querySelector('.popup-wrapper')
    sim=document.querySelector('.popup-sim')
    nao=document.querySelector('.popup-nao')

    alerta.addEventListener('click', function(){
        popup.style.display='block'
    })

    sim.addEventListener('click', function(){
        popup.style.display='none'
        intervalo = window.setInterval(function() {
            if (alerta.src.split('/').at(-1)==="alerta.png"){
                alerta.src="../../assets/img/alerta_2.png"
            } else{
                alerta.src="../../assets/img/alerta.png"
            }
        }, 500)
        
        window.setTimeout(function() {
            clearInterval(intervalo)
        }, 7000)
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