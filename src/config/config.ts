import { IConfig } from "../@types";

export const config: IConfig = {
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x000000,
  autoStart: true,
  antialias: true,
  transparent: false,
  resolution: 1
};

export const gameDefaultConfig: {
  gameTime: number;
  asteroidsCount: number;
  bulletsCount: number;
  bossHP: number
} = {
  gameTime: 60,
  asteroidsCount: 7,
  bulletsCount: 10,
  bossHP: 4,
}

export const resultMessage: {
  win: string;
  lose: string;
  levelTwo: string;
} = {
  win: 'YOU WIN!',
  lose: 'YOU LOSE!',
  levelTwo: `PERFECT!\n \n  LEVEL 2\n \n  READY!`
};