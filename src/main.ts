import { PIXI } from './renderer';

const app = new PIXI.Application({ width: 1280, height: 720 });
const canvasElement: HTMLCanvasElement = app.view as HTMLCanvasElement; 
document.body.appendChild(canvasElement);

const config: {
    gameTime: number;
    asteroidsCount: number;
    bulletsCount: number;
    bossHP: number
} = {
    gameTime: 6,
    asteroidsCount: 1,
    bulletsCount: 10,
    bossHP: 4,

}

// Глобальні змінні
let player: PIXI.Sprite;
let bullets: PIXI.Graphics[] = [];
let bulletsText: PIXI.Text;
let asteroids: PIXI.Sprite[] = [];
let boss: PIXI.Sprite;
let projectile: PIXI.Graphics;
let bossHPScale:PIXI.Graphics;
let resultText: PIXI.Text;

let bulletCount: number = config.bulletsCount;
let defaultTimer: number = config.gameTime;
let gameInProgress : boolean = false;
let bossHP: number = 0;
let levelTwo:boolean = false;
const baseBossHP: number = config.bossHP;
let noAsteroids: boolean = false;
let finished: boolean = false;
let lastBullet: boolean = false;

// Timers
let countdownTimer: NodeJS.Timeout; 
let bossMovement: NodeJS.Timeout; 
let bossAttackInt: NodeJS.Timeout;
let projectileMovement: NodeJS.Timeout;
let asteroidInterval: NodeJS.Timeout;

const resultMessage: {
    win: string;
    lose: string;
    levelTwo: string;
} = {
    win: 'YOU WIN!',
    lose: 'YOU LOSE!',
    levelTwo: `PERFECT!\n \n  LEVEL 2\n \n  READY!`
};

// Background
const texture = PIXI.Texture.from('../public/assets/image/background/pngwing.com.png');
const background = new PIXI.Sprite(texture);
    background.width = app.screen.width;
    background.height = app.screen.height - 70;

//Button
const startButtonContainer = new PIXI.Container();
const buttonBackground = new PIXI.Graphics();
    buttonBackground.beginFill(0x000000); 
    buttonBackground.lineStyle(2, 0xFFFFFF); 
    buttonBackground.drawRect(0, 0, 200, 50); 
    buttonBackground.endFill();
const startButtonText = new PIXI.Text("Start Game", { fill: 0xFFFFFF });
    startButtonText.anchor.set(0.5); // Устанавливаем якорную точку по центру текста
    startButtonText.position.set(buttonBackground.width / 2, buttonBackground.height / 2);
    startButtonContainer.addChild(buttonBackground, startButtonText);
    startButtonContainer.position.set(app.screen.width / 2 - buttonBackground.width/2, app.screen.height  - buttonBackground.height - 5);
    startButtonContainer.eventMode = 'dynamic';
    startButtonContainer.on('pointerover', onButtonHover);
    startButtonContainer.on('pointerout', onButtonOut);
    startButtonContainer.on('pointerdown', startGame);

// Asteroid
const asteroidTexture = PIXI.Texture.from('../public/assets/image/others/asteroid.png');

// Таймер text
let timerText = new PIXI.Text(defaultTimer, { fill: 0xDC143C });
timerText.position.set(app.screen.width - 20 - timerText.width, 20);

const playerTexture = PIXI.Texture.from('../public/assets/image/others/player-rocket.png');
    player = new PIXI.Sprite(playerTexture);
    player.width = 120;
    player.height = 190;
    player.position.set(app.screen.width / 2 - player.width/2, app.screen.height - 260);
    bulletsText = new PIXI.Text(`bullets: ${bulletCount}/${config.bulletsCount}`, { fill: 0xDC143C });
    bulletsText.position.set(20, 20); 
   
function initialize() {
    clearAllIntervals()
    timerText.text = config.gameTime;
    refresBulletsCount()
    app.stage.addChild(background);
    app.stage.addChild(startButtonContainer);
    app.stage.addChild(bulletsText); 
    app.stage.addChild(player);
    app.stage.addChild(timerText);
   
}

function startGame () { 
    if (gameInProgress) {
        return; 
    }
        window.addEventListener('keydown', onKeyDown);
    finished = false;
    app.stage.removeChild(resultText); 
    defaultTimer = config.gameTime;
    bulletCount = config.bulletsCount;
    asteroids = [];
    lastBullet = false;
    levelTwo = false; 
    app.stage.removeChild(resultText); 
    app.stage.addChild(timerText)
    startCountdownTimer();
    createAsteroidInterval()
    gameInProgress = true;
}

function createAsteroidInterval () {
    let asteroidsCount = 0; 
    asteroidInterval = setInterval(() => {
        createAsteroid();
        asteroidsCount++;
        if (asteroidsCount >= config.asteroidsCount) {
            clearInterval(asteroidInterval);
        }
    }, 1000);
}

function createAsteroid() {
    const asteroid = new PIXI.Sprite(asteroidTexture);
    asteroid.width = 100;
    asteroid.height = 100;
    const minDistanceFromPlayer = player.width / 2;

    let randomX = Math.random() * (app.screen.width - asteroid.width);
    let randomY = 30 + Math.random() * (app.screen.height / 3);

    while (Math.abs(randomX - player.x) < minDistanceFromPlayer) {
        randomX = Math.random() * (app.screen.width - asteroid.width);
    }

    asteroid.position.set(randomX, randomY);

    app.stage.addChild(asteroid);
    asteroids.push(asteroid);

}

function startCountdownTimer() {
    defaultTimer = config.gameTime;
    countdownTimer = setInterval(() => {
        defaultTimer--;
        timerText.text = `${defaultTimer}`;
        if (defaultTimer <= 0) {
            checkGameOver();
        }
    }, 1000);
}

// Постріли
function shoot() {
    const bullet = createBullet();

    const bulletMovement = setInterval(() => {
        bullet.y -= 5;
        if (bullet.y < 0) {
            clearInterval(bulletMovement);
            app.stage.removeChild(bullet);
            bullets = bullets.filter(b => b !== bullet);
            refresBulletsCount()
            if (bulletCount === 1) {
                lastBullet = true;

                console.log('bilc1 -->', );

            }
            if (bulletCount === 0 ) {
                // finished = true;
                    setTimeout(() => {
                        lastBullet = false;
                    checkGameOver()
                    }, 1000)
            }
            
        }

        for (let i = 0; i < asteroids.length; i++) {
            if (bullet.getBounds().intersects(asteroids[i].getBounds())) {
                clearInterval(bulletMovement);
                app.stage.removeChild(bullet);
                app.stage.removeChild(asteroids[i]);
                bullets = bullets.filter(b => b !== bullet);
                asteroids.splice(i, 1);
                finished = false;
                noAsteroids = true;
                checkGameOver();
                break;
            }
        }

        // Якщо рівень 2 є бос на екрані, перевіряємо зіткнення кулі з босом
        if (levelTwo && boss) {
            if (bullet.getBounds().intersects(boss.getBounds())) {
                clearInterval(bulletMovement);
                app.stage.removeChild(bullet);
                bossHit(); 
                if (bossHP === 0) {
                    finished = true;
                    showResult(resultMessage.win);
                    app.stage.removeChild(boss)
                    app.stage.removeChild(bossHPScale)
                    clearInterval(bossAttackInt)
                    stopCountdownTimer()
                    clearInterval(bulletCount)
                    setTimeout(() => {
                        app.stage.removeChildren()
                    initialize()
                    }, 2000)
                }
            }
        }
    }, 16);
}

function createBullet() {
    const bullet = new PIXI.Graphics();
    const bulletRadius = 7;

    bullet.beginFill(0xFFFF00);
    bullet.drawCircle(0, -10, bulletRadius);
    bullet.endFill();

    bullet.position.set(player.x + player.width / 2, player.y);
    app.stage.addChild(bullet);

    bullets.push(bullet);

    return bullet;
}

function checkGameOver() {
  
    if (finished && noAsteroids) {
        return
    }
    if (!levelTwo  && !lastBullet && (bulletCount === 0 || defaultTimer <= 0)) {
        
        showResult(resultMessage.lose);
        stopCountdownTimer();
        finished = false;
        setTimeout(() => {
            app.stage.removeChildren();
            initialize();
        }, 2000);
    } else if (!levelTwo && asteroids.length === 0) {
        
        showResult(resultMessage.levelTwo);
        stopCountdownTimer();
        clearInterval(bulletCount);
        levelTwo = true;
        setTimeout(startLevelTwo, 3000);
        finished = true;
    } else if (levelTwo && defaultTimer <= 0) {        
        showResult(resultMessage.lose);
        finished = true;
        stopCountdownTimer();
        setTimeout(() => {
            app.stage.removeChildren();
            initialize();
        }, 2000);
    } else if (levelTwo && bulletCount <= 0) {
        showResult(resultMessage.lose);
        stopCountdownTimer();
        setTimeout(() => {
            app.stage.removeChildren();
            initialize();
        }, 2000);
    }
    gameInProgress = false;
}

function showResult(message:string) {
     resultText = new PIXI.Text(message, { fill: 0xFFFFFF, fontSize: 64 });
    resultText.position.set(app.screen.width / 2 - resultText.width / 2, app.screen.height / 3 - resultText.height / 2);
    app.stage.addChild(resultText);
            
}

// Перехід на рівень 2 з босом
function startLevelTwo() {
    lastBullet = false;
    bulletCount = config.bulletsCount;
    finished = false;
    app.stage.removeChild(resultText);
    startCountdownTimer()
    app.stage.addChild(timerText)
    refresBulletsCount()

    createBoss()
    bossAttackInt = setInterval(bossAttack, 2000)
}

function stopCountdownTimer() {
    clearInterval(countdownTimer);
    defaultTimer = config.gameTime;
    app.stage.removeChild(timerText); 
}

function createBoss() {
    const bossTexture = PIXI.Texture.from('../public/assets/image/others/boss.png');
    boss = new PIXI.Sprite(bossTexture);
    boss.width = 200;
    boss.height = 200;
    boss.position.set(app.screen.width / 2, 100);
    app.stage.addChild(boss);

    // Створення шкали здоров'я боса
    bossHPScale = new PIXI.Graphics();
    bossHPScale.beginFill(0xFF0000); 
    bossHPScale.drawRect(0, 0, 200, 20); 
    bossHPScale.endFill();
    bossHPScale.position.set(app.screen.width / 2 - 100, 50); 
    app.stage.addChild(bossHPScale); 

    bossHP = baseBossHP; 
    // moveBoss()
}

 // Обробник атаки боса
 function bossAttack() {

    projectile = new PIXI.Graphics();
   projectile.beginFill(0xFF0000); 
   projectile.drawCircle(boss.x + boss.width/2, boss.y + boss.height, 10); 
   projectile.endFill();
   app.stage.addChild(projectile);

    projectileMovement = setInterval(() => {
       projectile.y += 5; 

       // Якщо снаряд досяг межі екрана або зіткнувся з гравцем
       if (projectile.y > app.screen.height || projectile.getBounds().intersects(player.getBounds())) {
           clearInterval(projectileMovement); 
           app.stage.removeChild(projectile); 

           // Якщо снаряд зіткнувся з гравцем, показати повідомлення про поразку
           if (projectile.getBounds().intersects(player.getBounds())) {
               app.stage.removeChild(boss)
               app.stage.removeChild(bossHPScale);
               showResult(resultMessage.lose);
               finished = true;
               clearInterval(bossAttackInt)
               setTimeout(() => {
                stopCountdownTimer();
                setTimeout(() => {
                    app.stage.removeChildren();
                    initialize();
                }, 2000);
               }, 2000)
           }
       }
   }, 16);    
   if (!boss && !levelTwo) {
       clearInterval(projectileMovement);
       app.stage.removeChild(projectile)
   }
  }


function moveBoss() {
   const bossSpeed = 100; 

const move = () => {
   bossMovement = setInterval(() => {
       // Генерація випадкової позиції боса 
       const randomX = Math.random() * (app.screen.width - boss.width);

       // переміщення боса 
       if (boss.x < randomX) {
           boss.x += bossSpeed; // Якщо бос знаходиться ліворуч від випадкової позиції, рухаємо його вправо
       } else if (boss.x > randomX) {
           boss.x -= bossSpeed; // Аналогічно - вліво
       }

       // Обмеження руху 
       if (boss.x < 0) {
           boss.x = 0;
       } else if (boss.x > app.screen.width - boss.width) {
           boss.x = app.screen.width - boss.width;
       }
   }, 500); 
}
requestAnimationFrame(move);
}
function bossHit() {
    bossHP--; 
    updateBossHPBar(); 
}


function updateBossHPBar() {
    const currentHP = bossHP / baseBossHP;
    const barWidth = 200 * currentHP; 
    bossHPScale.clear(); 
    bossHPScale.beginFill(0xFF0000); 
    bossHPScale.drawRect(0, 0, barWidth, 20); 
    bossHPScale.endFill();
}


function onButtonHover() {
    buttonBackground.tint = 0x666666; 
}


function onButtonOut() {
    buttonBackground.tint = 0xFFFFFF; 
}

function clearAllIntervals() {
    clearInterval(countdownTimer);
    clearInterval(bossMovement);
    clearInterval(bossAttackInt);
    clearInterval(projectileMovement);
    clearInterval(asteroidInterval);
}

function onKeyDown(event: KeyboardEvent) {
    const playerSpeed = 30;

    if (event.key === 'ArrowLeft') {
        if (player.x - playerSpeed >= 0) {
            player.x -= playerSpeed;
        }
    } else if (event.key === 'ArrowRight') {
        if (player.x + player.width + playerSpeed <= app.screen.width) {
            player.x += playerSpeed;
        }
    } else if (event.key === ' ' && !finished) {
        if (bulletCount > 0) {
            shoot();
            bulletCount--;
            refresBulletsCount()
        }
    }
}

function refresBulletsCount () {
    if (bulletsText) {
        bulletsText.text = `bullets: ${bulletCount}/${config.bulletsCount}`;
    }
}

function startMusic() {
    const music = new Audio('../public/assets/audio/1.mp3');
    music.loop = true; 
    music.volume = 0.3; 
    music.play();
    document.removeEventListener('click', startMusic);
}

initialize()

document.addEventListener('click', startMusic);
