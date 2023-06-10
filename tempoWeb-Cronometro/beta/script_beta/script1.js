let minutos = 0
let segundos = 10
function tempo() {
    if(segundos > 0){
        --segundos
        console.log(segundos)
    }else if(minutos > 0 && segundos == 0){
        --minutos
        segundos = 59
        console.log(minutos)
        console.log(segundos)
    }else{
        return
    }
    setTimeout(tempo,1000)
     }
tempo()
    //ele so vai encerrar quando encontrar o return
