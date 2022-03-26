import Phaser from 'phaser';
import LinkNESPlayer from '../players/link-nes/link-nes.player';

import LinkNESSprites from '../players/link-nes/link-nes.sprites.png';
import LinkNES2Sprites from '../players/link-nes-2/link-nes-2.sprites.png';
import LinkSNESSprites from '../players/link-nes/link-nes.sprites.png';
import LinkGBCSprites from '../players/link-gbc/link-gbc.sprites.png';
import LinkGBCJumpingSprites from '../players/link-gbc/link-gbc-jumping.sprites.png';

const keys = {
  LINK_NES: 'link-nes',
  LINK_NES_2: 'link-nes-2',
  LINK_SNES: 'link-snes',
  LINK_GBC: 'link-gbc',
  LINK_GBC_JUMPING: 'link-gbc-jumping',
  DUDE: 'dude',
  GROUND: 'ground',
};

class SandboxScene extends Phaser.Scene {
  player: any;

  constructor() {
    super('sandbox');
  }

  preload(): void {
    this.load.spritesheet(keys.LINK_NES, LinkNESSprites, {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet(keys.LINK_NES_2, LinkNES2Sprites, {
      frameWidth: 16,
      frameHeight: 32,
    });
    this.load.spritesheet(keys.LINK_SNES, LinkSNESSprites, {
      frameWidth: 16,
      frameHeight: 24,
    });
    this.load.spritesheet(keys.LINK_GBC, LinkGBCSprites, {
      frameWidth: 16,
      frameHeight: 16,
      endFrame: 12,
    });
    this.load.spritesheet(keys.LINK_GBC_JUMPING, LinkGBCJumpingSprites, {
      frameWidth: 16,
      frameHeight: 32,
    });
  }

  create(): void {
    this.cameras.main.setBackgroundColor(0xffffff);

    let platforms: Phaser.GameObjects.Group = this.add.group();

    const r1: Phaser.GameObjects.Rectangle = this.add.rectangle(128, 231, 255, 16, 0x000000);
    const r2: Phaser.GameObjects.Rectangle = this.add.rectangle(90, 207, 16, 32, 0x000000);
    const r3: Phaser.GameObjects.Rectangle = this.add.rectangle(192, 183, 128, 16, 0x000000);

    this.physics.add.existing(r1, true);
    this.physics.add.existing(r2, true);
    this.physics.add.existing(r3, true);

    platforms.add(r1);
    platforms.add(r2);
    platforms.add(r3);

    this.player = new LinkNESPlayer(this, 50, 100, keys.LINK_NES);
    // this.player1 = new LinkNES2Player(this, 50, 100, keys.LINK_NES_2);
    // this.player1 = new LinkSNESPlayer(this, 50, 100, keys.LINK_SNES);
    // this.player1 = new LinkGBCPlayer(this, 50, 50, keys.LINK_GBC);

    this.physics.add.collider(this.player, platforms);
  }

  update(time: number, delta: number): void {
    if (this.player) {
      this.player.update(time);
    }
  }
}

export default SandboxScene;
