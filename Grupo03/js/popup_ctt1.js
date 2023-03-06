document.addEventListener('DOMContentLoaded', function(){

    alerta=document.querySelector('.img_alerta')
    popup=document.querySelector('.popup-wrapper')

    alerta.addEventListener('click', function(){
        popup.style.display='block'
    })

    const slider = document.querySelector('.slider');

    slider.addEventListener('change', (event) => {
    if (event.target.value === event.target.max) {
        console.log('Botão deslizante chegou ao fim!');
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
        popup.addEventListener('click', function(event){
            const classNameOfClickedElement=event.target.classList[0]
            if (classNameOfClickedElement==='popup-wrapper'){
                popup.style.display='none'
            }
        })
    } else {
        event.target.value = 0;
    }
    });

    popup.addEventListener('click', function(event){
        const classNameOfClickedElement=event.target.classList[0]
        if (classNameOfClickedElement==='popup-wrapper'){
            popup.style.display='none'
        }
    })

})