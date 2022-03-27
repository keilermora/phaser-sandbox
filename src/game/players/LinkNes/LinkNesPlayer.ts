import Phaser from 'phaser';
import { Player } from '../player';
import { LinkNesAnimationKeysEnum } from './LinkNesAnimationKeysEnum';

/**
 * A top view character that can move in all four directions, but not diagonally
 */
export class LinkNesPlayer extends Player {
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  private readonly movementSpeed: number = 80;

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame);

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.setCollideWorldBounds(true);

    // Link NES can walk in all four directions, so gravity doesn't have effect
    this.setGravityY(0);

    this.scene.anims.create({
      key: LinkNesAnimationKeysEnum.WALKING_DOWN,
      frames: this.scene.anims.generateFrameNumbers(texture, { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: LinkNesAnimationKeysEnum.WALKING_SIDE,
      frames: this.scene.anims.generateFrameNumbers(texture, { start: 2, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: LinkNesAnimationKeysEnum.WALKING_UP,
      frames: this.scene.anims.generateFrameNumbers(texture, { start: 4, end: 5 }),
      frameRate: 10,
      repeat: -1,
    });
  }

  update() {
    const { up, right, down, left } = this.cursors;

    // Link NES can walk only in one direction
    if (left.isDown) {
      this.setFlipX(true);
      this.setVelocity(-this.movementSpeed, 0);
      this.anims.play(LinkNesAnimationKeysEnum.WALKING_SIDE, true);
    } else if (right.isDown) {
      this.setFlipX(false);
      this.setVelocity(this.movementSpeed, 0);
      this.anims.play(LinkNesAnimationKeysEnum.WALKING_SIDE, true);
    } else if (up.isDown) {
      this.setFlipX(false);
      this.setVelocity(0, -this.movementSpeed);
      this.anims.play(LinkNesAnimationKeysEnum.WALKING_UP, true);
    } else if (down.isDown) {
      this.setFlipX(false);
      this.setVelocity(0, this.movementSpeed);
      this.anims.play(LinkNesAnimationKeysEnum.WALKING_DOWN, true);
    } else {
      this.setVelocity(0, 0);
      this.anims.stop();
    }
  }
}
