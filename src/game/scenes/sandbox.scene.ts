import Phaser from 'phaser';

import { Player } from '../players/player';

import { LinkNesPlayer } from '../players/LinkNes/LinkNesPlayer';
import { LinkNes2Player } from '../players/LinkNes2/LinkNes2Player';
import { LinkSnesPlayer } from '../players/LinkSnes/LinkSnesPlayer';
import { LinkGbcPlayer } from '../players/LinkGbc/LinkGbcPlayer';

import { LinkSnesSpritesheetFileConfig } from '../players/LinkSnes/LinkSnesSpritesheetFileConfig';
import { LinkNesSpritesheetFileConfig } from '../players/LinkNes/LinkNesSpritesheetFileConfig';
import { LinkNes2SpritesheetFileConfig } from '../players/LinkNes2/LinkNes2SpritesheetFileConfig';
import { LinkGbcSpritesheetFileConfig } from '../players/LinkGbc/LinkGbcSpritesheetFileConfig';

class SandboxScene extends Phaser.Scene {
  private player: Player;
  private platforms: Phaser.GameObjects.Group;

  private keyOne: Phaser.Input.Keyboard.Key;
  private keyTwo: Phaser.Input.Keyboard.Key;
  private keyThree: Phaser.Input.Keyboard.Key;
  private keyFour: Phaser.Input.Keyboard.Key;

  constructor() {
    super('sandbox');
  }

  preload(): void {
    this.load.spritesheet(LinkNesSpritesheetFileConfig);
    this.load.spritesheet(LinkNes2SpritesheetFileConfig);
    this.load.spritesheet(LinkSnesSpritesheetFileConfig);
    this.load.spritesheet(LinkGbcSpritesheetFileConfig);
  }

  create(): void {
    let { width, height } = this.sys.game.canvas;

    this.cameras.main.setBackgroundColor(0xffffff);

    this.platforms = this.add.group();

    // Borders
    const rectangleWidth = 16;

    const borderTop = this.add.rectangle(128, rectangleWidth / 2, width, rectangleWidth, 0x000000);
    const borderRight = this.add.rectangle(
      width - rectangleWidth / 2,
      width / 2,
      rectangleWidth,
      width,
      0x000000,
    );
    const borderBottom = this.add.rectangle(
      width / 2,
      height - rectangleWidth / 2,
      width,
      rectangleWidth,
      0x000000,
    );
    const borderLeft = this.add.rectangle(rectangleWidth / 2, 128, rectangleWidth, width, 0x000000);

    const r1: Phaser.GameObjects.Rectangle = this.add.rectangle(
      rectangleWidth + 64,
      208,
      rectangleWidth,
      32,
      0x00000,
    );
    const r2: Phaser.GameObjects.Rectangle = this.add.rectangle(
      184,
      height - 64,
      112,
      rectangleWidth,
      0x000000,
    );

    this.physics.add.existing(borderTop, true);
    this.physics.add.existing(borderRight, true);
    this.physics.add.existing(borderBottom, true);
    this.physics.add.existing(borderLeft, true);
    this.physics.add.existing(r1, true);
    this.physics.add.existing(r2, true);

    this.platforms.add(borderTop);
    this.platforms.add(borderRight);
    this.platforms.add(borderBottom);
    this.platforms.add(borderLeft);
    this.platforms.add(r1);
    this.platforms.add(r2);

    const text = this.add.text(
      rectangleWidth * 1.5,
      rectangleWidth * 1.5,
      'Swap player!\n1. Link NES\n2. Link NES 2\n3. Link SNES\n4. Link GBC',
      {
        color: '#000000',
      },
    );

    this.keyOne = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
    this.keyTwo = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
    this.keyThree = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
    this.keyFour = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);

    this.setPlayer(LinkNesSpritesheetFileConfig);
  }

  setPlayer(spritesheetFileConfig: Phaser.Types.Loader.FileTypes.SpriteSheetFileConfig): void {
    // Return if is the actual one
    if (this.player?.texture.key === spritesheetFileConfig.key) {
      return;
    }

    const { key, frameConfig } = spritesheetFileConfig;
    let x, y;

    if (this.player) {
      x = this.player.x;
      y = this.player.y + this.player.height / 2 - frameConfig.frameHeight / 2;
      this.player?.destroy();
    } else {
      x = 50;
      y = 50;
    }

    if (key === LinkNesSpritesheetFileConfig.key) {
      this.player = new LinkNesPlayer(this, x, y, key);
    } else if (key === LinkNes2SpritesheetFileConfig.key) {
      this.player = new LinkNes2Player(this, x, y, key);
    } else if (key === LinkSnesSpritesheetFileConfig.key) {
      this.player = new LinkSnesPlayer(this, x, y, key);
    } else if (key === LinkGbcSpritesheetFileConfig.key) {
      this.player = new LinkGbcPlayer(this, x, y, key);
    }

    this.physics.add.collider(this.player, this.platforms);
  }

  update(time: number, delta: number): void {
    if (this.keyOne.isDown) {
      this.setPlayer(LinkNesSpritesheetFileConfig);
    } else if (this.keyTwo.isDown) {
      this.setPlayer(LinkNes2SpritesheetFileConfig);
    } else if (this.keyThree.isDown) {
      this.setPlayer(LinkSnesSpritesheetFileConfig);
    } else if (this.keyFour.isDown) {
      this.setPlayer(LinkGbcSpritesheetFileConfig);
    }

    if (this.player) {
      this.player.update(time);
    }
  }
}

export default SandboxScene;
