  import {addZero} from "./index.js"; 
  export {play, pause, stop};
  
  let idStop;
  const despertadoRelogio = new Audio('../audio/despertador.mp3');
  function play(){
    inverterClassButton01()
    let minutos = document.querySelector('#minutos').innerText
    let segundos = document.querySelector('#segundos').innerText
    if(segundos>0){
      --segundos
      document.querySelector('#segundos').innerText = segundos
      addZero(minutos,segundos)
    }else if(minutos > 0 && segundos == 0){
      --minutos
      segundos = 59
      document.querySelector('#minutos').innerText = minutos
      document.querySelector('#segundos').innerText = segundos
      addZero(minutos,segundos)
    }else{
      despertadoRelogio.play()
      return
    }
    idStop = setTimeout(play,1000)
  }
  function pause(){
    inverterClassButton02()
    clearTimeout(idStop)
  }
  function stop(){
    inverterClassButton02()
    clearTimeout(idStop)
    document.querySelector('#minutos').innerText = '00'
    document.querySelector('#segundos').innerText = '00'
  }
  function inverterClassButton01(){
    playOn.classList.add('sumir')
    definirTimer.classList.add('sumir')
    playStop.classList.remove('sumir')
    playOff.classList.remove('sumir')
  }
  function inverterClassButton02() {
    playOn.classList.remove('sumir')
    definirTimer.classList.remove('sumir')
    playStop.classList.add('sumir')
    playOff.classList.add('sumir')
  }