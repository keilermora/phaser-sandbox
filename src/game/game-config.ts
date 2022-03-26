import Phaser from 'phaser';
import SandboxScene from './scenes/sandbox.scene';

const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  scene: [SandboxScene],
};

export default gameConfig;
