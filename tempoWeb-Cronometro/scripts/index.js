  import {play, pause, stop} from "./controls.js";
  import {musicaOn, musicaOff} from "./music.js";
  export{addZero};

  let minutos = document.querySelector('#minutos')
  let segundos = document.querySelector('#segundos')
  const volumeOn = document.getElementById('volumeOn')
  const volumeOff = document.getElementById('volumeOff')
  const definirTimer = document.getElementById('definirTimer')
  const playOn = document.getElementById('playOn')
  const playStop = document.getElementById('playStop')
  const playOff = document.getElementById('playOff')
  volumeOn.addEventListener('click',musicaOn)
  volumeOff.addEventListener('click',musicaOff)
  definirTimer.addEventListener('click',timeMinutosSegundos)
  playOn.addEventListener('click',play)
  playStop.addEventListener('click',pause)
  playOff.addEventListener('click',stop)

  function timeMinutosSegundos(){
    document.querySelector('#minutos').innerText = prompt('Digite o valor dos minutos:')
    document.querySelector('#segundos').innerText = prompt('Digite o valor dos segundos:')
    minutos = document.querySelector('#minutos').innerText
    segundos = document.querySelector('#segundos').innerText
    addZero(minutos,segundos)
  }
  function addZero(minutos,segundos){
    if(minutos<10){
      document.querySelector('#minutos').innerText = String(minutos).padStart(2, '0')
    }if(segundos<10){
      document.querySelector('#segundos').innerText = String(segundos).padStart(2, '0')
    }
  }