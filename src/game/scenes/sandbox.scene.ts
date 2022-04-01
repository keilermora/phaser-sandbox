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
    const borderWidth: number = 16;
    const borderColor: number = 0x000000;
    const borderTop: Phaser.GameObjects.Rectangle = this.add.rectangle(
      128,
      borderWidth / 2,
      width,
      borderWidth,
      borderColor,
    );
    const borderRight: Phaser.GameObjects.Rectangle = this.add.rectangle(
      width - borderWidth / 2,
      width / 2,
      borderWidth,
      width,
      borderColor,
    );
    const borderBottom: Phaser.GameObjects.Rectangle = this.add.rectangle(
      width / 2,
      height - borderWidth / 2,
      width,
      borderWidth,
      borderColor,
    );
    const borderLeft: Phaser.GameObjects.Rectangle = this.add.rectangle(
      borderWidth / 2,
      128,
      borderWidth,
      width,
      borderColor,
    );

    // Platforms
    const r1: Phaser.GameObjects.Rectangle = this.add.rectangle(
      borderWidth + 64,
      208,
      borderWidth,
      32,
      borderColor,
    );
    const r2: Phaser.GameObjects.Rectangle = this.add.rectangle(
      184,
      height - 64,
      112,
      borderWidth,
      borderColor,
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

    this.add.text(
      borderWidth * 1.5,
      borderWidth * 1.5,
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

  /**
   * Set the current player
   * @param {Phaser.Types.Loader.FileTypes.SpriteSheetFileConfig} spritesheetFileConfig
   */
  setPlayer(spritesheetFileConfig: Phaser.Types.Loader.FileTypes.SpriteSheetFileConfig): void {
    // Do nothing if the player is the actual one
    if (this.player?.texture.key === spritesheetFileConfig.key) {
      return;
    }

    const { key, frameConfig } = spritesheetFileConfig;
    let x, y;

    // Check if the player exists
    if (this.player) {
      x = this.player.x;

      // We must calculate the player actual position starting at the bottom of the sprite, because
      // the next player may have a different height
      y = this.player.y + this.player.height / 2 - frameConfig.frameHeight / 2;

      // Remove te current player
      this.player?.destroy();
    } else {
      // If the player doesn't exists, then sets a default start position
      x = 45;
      y = 195;
    }

    // Create the current player
    if (key === LinkNesSpritesheetFileConfig.key) {
      this.player = new LinkNesPlayer(this, x, y, key);
    } else if (key === LinkNes2SpritesheetFileConfig.key) {
      this.player = new LinkNes2Player(this, x, y, key);
    } else if (key === LinkSnesSpritesheetFileConfig.key) {
      this.player = new LinkSnesPlayer(this, x, y, key);
    } else if (key === LinkGbcSpritesheetFileConfig.key) {
      this.player = new LinkGbcPlayer(this, x, y, key);
    }

    // Add collisions to the recently created player
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
