import { Howl } from 'howler';

const back = new Howl({
  src: ['../../public/assets/audio/1.mp3'],
  autoplay: false,
  loop: true,
  volume: 0.2,

});

const shoot = new Howl({
    src: ['../../public/assets/audio/shoot.ogg'],
    autoplay: false,
    loop: false,
    volume: 0.7,
 
  });

  const firstLevelPass = new Howl({
    src: ['../../public/assets/audio/firstLevelPass.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.7,
 
  });

  const win = new Howl({
    src: ['../../public/assets/audio/game-won.ogg'],
    autoplay: false,
    loop: false,
    volume: 0.7, 
  });

  const lost = new Howl({
    src: ['../../public/assets/audio/gameLost.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.8,   
  });

  
  const healthLost = new Howl({
    src: ['../../public/assets/audio/healthLost.mp3'],
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