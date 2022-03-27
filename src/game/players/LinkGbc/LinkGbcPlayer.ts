import Phaser, { Scene } from 'phaser';
import FacingSideEnum from '../../commons/enums/facing-side.enum';
import { Player } from '../player';
import { LinkGbcAnimationKeysEnum } from './LinkGbcAnimationKeysEnum';

/**
 * A top view character that can move in all directions, including diagonally.
 */
export class LinkGbcPlayer extends Player {
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  private facingSide: FacingSideEnum = FacingSideEnum.DOWN;
  private readonly movementSpeed: number = 80;

  constructor(scene: Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame);

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.body.setSize(16, 10);
    this.body.setOffset(0, 6);

    this.setCollideWorldBounds(true);

    this.scene.anims.create({
      key: LinkGbcAnimationKeysEnum.WALKING_UP,
      frames: this.scene.anims.generateFrameNumbers(texture, { frames: [8, 9] }),
      frameRate: 8,
      repeat: -1,
    });
    this.scene.anims.create({
      key: LinkGbcAnimationKeysEnum.WALKING_SIDE,
      frames: this.scene.anims.generateFrameNumbers(texture, { frames: [4, 5] }),
      frameRate: 8,
      repeat: -1,
    });
    this.scene.anims.create({
      key: LinkGbcAnimationKeysEnum.WALKING_DOWN,
      frames: this.scene.anims.generateFrameNumbers(texture, { frames: [0, 1] }),
      frameRate: 8,
      repeat: -1,
    });
    this.scene.anims.create({
      key: LinkGbcAnimationKeysEnum.PUSHING_UP,
      frames: this.scene.anims.generateFrameNumbers(texture, { frames: [10, 11] }),
      frameRate: 8,
      repeat: -1,
    });
    this.scene.anims.create({
      key: LinkGbcAnimationKeysEnum.PUSHING_SIDE,
      frames: this.scene.anims.generateFrameNumbers(texture, { frames: [6, 7] }),
      frameRate: 8,
      repeat: -1,
    });
    this.scene.anims.create({
      key: LinkGbcAnimationKeysEnum.PUSHING_DOWN,
      frames: this.scene.anims.generateFrameNumbers(texture, { frames: [2, 3] }),
      frameRate: 8,
      repeat: -1,
    });
  }

  update(time: number, delta?: number) {
    const { up, right, down, left, space } = this.cursors;

    // Character's movement horizontally
    if (left.isDown) {
      this.setVelocityX(-this.movementSpeed);
      this.flipX = true;
      this.facingSide = FacingSideEnum.LEFT;
    } else if (right.isDown) {
      this.setVelocityX(this.movementSpeed);
      this.flipX = false;
      this.facingSide = FacingSideEnum.RIGHT;
    } else {
      this.setVelocityX(0);
    }

    // Character's movement vertically
    if (down.isDown) {
      this.setVelocityY(this.movementSpeed);
      this.facingSide = FacingSideEnum.DOWN;
    } else if (up.isDown) {
      this.setVelocityY(-this.movementSpeed);
      this.facingSide = FacingSideEnum.UP;
    } else {
      this.setVelocityY(0);
    }

    // Character's animation
    if (left.isDown || right.isDown) {
      if (this.body.touching.left || this.body.touching.right) {
        this.anims.play(LinkGbcAnimationKeysEnum.PUSHING_SIDE, true);
      } else {
        this.anims.play(LinkGbcAnimationKeysEnum.WALKING_SIDE, true);
      }
    } else if (down.isDown) {
      if (this.body.touching.down) {
        this.anims.play(LinkGbcAnimationKeysEnum.PUSHING_DOWN, true);
      } else {
        this.anims.play(LinkGbcAnimationKeysEnum.WALKING_DOWN, true);
      }
    } else if (up.isDown) {
      if (this.body.touching.up) {
        this.anims.play(LinkGbcAnimationKeysEnum.PUSHING_UP, true);
      } else {
        this.anims.play(LinkGbcAnimationKeysEnum.WALKING_UP, true);
      }
    } else {
      // The first frame of the walk animation represents the "idle" state
      if (this.facingSide === FacingSideEnum.UP) {
        this.anims.play(LinkGbcAnimationKeysEnum.WALKING_UP);
      } else if (this.facingSide === FacingSideEnum.DOWN) {
        this.anims.play(LinkGbcAnimationKeysEnum.WALKING_DOWN);
      } else {
        this.anims.play(LinkGbcAnimationKeysEnum.WALKING_SIDE);
      }
    }
  }
}
