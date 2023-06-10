  export {musicaOn, musicaOff};
  
  const musicaRelogio = new Audio('../audio/musica_relogio.mp3');
  function musicaOn(){
    musicaRelogio.loop = true;
    musicaRelogio.play();
    volumeOn.classList.add('sumir');
    volumeOff.classList.remove('sumir');
  }
  function musicaOff(){
    musicaRelogio.pause();
    volumeOff.classList.add('sumir');
    volumeOn.classList.remove('sumir');
  }
