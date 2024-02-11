import { Howl } from 'howler';

const back = new Howl({
  src: ['../assets/audio/1.mp3'],
  autoplay: false,
  loop: true,
  volume: 0.2,

});

const shoot = new Howl({
    src: ['../assets/audio/shoot.ogg'],
    autoplay: false,
    loop: false,
    volume: 0.7,
 
  });

  const firstLevelPass = new Howl({
    src: ['../assets/audio/firstLevelPass.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.7,
 
  });

  const win = new Howl({
    src: ['../assets/audio/game-won.ogg'],
    autoplay: false,
    loop: false,
    volume: 0.7, 
  });

  const lost = new Howl({
    src: ['../assets/audio/gameLost.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.8,   
  });

  
  const healthLost = new Howl({
    src: ['../assets/audio/healthLost.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.7,
 
  });

  const Music = {
    back,
    shoot,
    firstLevelPass,
    win,
    lost,
    healthLost
  }

  export {Music};