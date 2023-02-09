document.addEventListener("DOMContentLoaded", function(){
    h3=document.querySelectorAll('h3')
    hora= new Date().getHours()
    minuto= new Date().getMinutes()
    dia= new Date().getDay()
    mes= new Date().getMonth()
    h3[0].innerHTML=hora + ':' + minuto +' '+ '-' + ' ' + dia + '/' + mes
    h3[1].innerHTML=hora + ':' + minuto +' '+ '-' + ' ' + dia + '/' + mes
    h3[2].innerHTML=hora + ':' + minuto +' '+ '-' + ' ' + dia + '/' + mes
    h3[3].innerHTML=hora + ':' + minuto +' '+ '-' + ' ' + dia + '/' + mes
    h3[4].innerHTML=hora + ':' + minuto +' '+ '-' + ' ' + dia + '/' + mes

})