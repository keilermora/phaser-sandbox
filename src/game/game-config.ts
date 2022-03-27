import Phaser from 'phaser';
import SandboxScene from './scenes/sandbox.scene';

const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 256,
  height: 240,
  zoom: 3,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  scene: [SandboxScene],
  pixelArt: true,
};

export default gameConfig;
