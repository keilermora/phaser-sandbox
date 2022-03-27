import Phaser, { Scene } from 'phaser';
import FacingSideEnum from '../../commons/enums/facing-side.enum';
import { Player } from '../player';
import { LinkSnesAnimationKeysEnum } from './LinkSnesAnimationKeysEnum';

/**
 * A top view character that can move in all directions, including diagonally.
 */
export class LinkSnesPlayer extends Player {
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  private facingSide: FacingSideEnum = FacingSideEnum.DOWN;
  private readonly movementSpeed: number = 80;

  constructor(scene: Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame);

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.setBodySize(16, 16);
    this.body.setOffset(0, 8);
    this.setCollideWorldBounds(true);

    // Link NES can walk in all four directions, so gravity doesn't have effect
    this.setGravityY(0);

    this.scene.anims.create({
      key: LinkSnesAnimationKeysEnum.IDLE_UP,
      frames: [{ key: texture, frame: 18 }],
    });
    this.scene.anims.create({
      key: LinkSnesAnimationKeysEnum.IDLE_SIDE,
      frames: [{ key: texture, frame: 9 }],
    });
    this.scene.anims.create({
      key: LinkSnesAnimationKeysEnum.IDLE_DOWN,
      frames: [{ key: texture, frame: 0 }],
    });
    this.scene.anims.create({
      key: LinkSnesAnimationKeysEnum.WALKING_UP,
      frames: this.scene.anims.generateFrameNumbers(texture, { start: 19, end: 26 }),
      frameRate: 15,
      repeat: -1,
    });
    this.scene.anims.create({
      key: LinkSnesAnimationKeysEnum.WALKING_SIDE,
      frames: this.scene.anims.generateFrameNumbers(texture, { start: 10, end: 17 }),
      frameRate: 15,
      repeat: -1,
    });
    this.scene.anims.create({
      key: LinkSnesAnimationKeysEnum.WALKING_DOWN,
      frames: this.scene.anims.generateFrameNumbers(texture, { start: 1, end: 8 }),
      frameRate: 15,
      repeat: -1,
    });
  }

  update() {
    const { up, right, down, left } = this.cursors;

    // Character's movement horizontally
    if (left.isDown) {
      this.facingSide = FacingSideEnum.LEFT;
      this.setVelocityX(-this.movementSpeed);
      this.setFlipX(true);
    } else if (right.isDown) {
      this.facingSide = FacingSideEnum.RIGHT;
      this.setVelocityX(this.movementSpeed);
      this.setFlipX(false);
    } else {
      this.setVelocityX(0);
    }

    // Character's movement vertically
    if (up.isDown) {
      this.facingSide = FacingSideEnum.UP;
      this.setVelocityY(-this.movementSpeed);
    } else if (down.isDown) {
      this.facingSide = FacingSideEnum.DOWN;
      this.setVelocityY(this.movementSpeed);
    } else {
      this.setVelocityY(0);
    }

    // Character's walking animation
    if (left.isDown || right.isDown) {
      this.anims.play(LinkSnesAnimationKeysEnum.WALKING_SIDE, true);
    } else if (down.isDown) {
      this.anims.play(LinkSnesAnimationKeysEnum.WALKING_DOWN, true);
    } else if (up.isDown) {
      this.anims.play(LinkSnesAnimationKeysEnum.WALKING_UP, true);
    } else {
      // Character's idle animation
      if (this.facingSide === FacingSideEnum.UP) {
        this.anims.play(LinkSnesAnimationKeysEnum.IDLE_UP);
      } else if (this.facingSide === FacingSideEnum.DOWN) {
        this.anims.play(LinkSnesAnimationKeysEnum.IDLE_DOWN);
      } else {
        this.anims.play(LinkSnesAnimationKeysEnum.IDLE_SIDE);
      }
    }
  }
}
