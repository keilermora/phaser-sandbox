/* eslint-disable @typescript-eslint/no-unused-vars */
import Phaser from 'phaser';
import gameConfig from './game/game-config';

import './styles.css';

class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

window.addEventListener('load', () => {
  const game = new Game(gameConfig);
});
