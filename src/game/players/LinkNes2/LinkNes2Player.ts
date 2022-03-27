import Phaser, { Scene } from 'phaser';
import { Player } from '../player';
import { LinkNes2AnimationKeysEnum } from './LinkNes2AnimationKeysEnum';

/**
 * A side scroll character that has the ability to jump!
 */
export class LinkNes2Player extends Player {
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  private readonly gravity: number = 1000;
  private readonly jumpPower: number = 260;
  private readonly movementSpeed: number = 90;

  // Landing animation
  private startLanding: number = 0;
  private readonly landingCoolDown: number = 125;

  constructor(scene: Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame);

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.setCollideWorldBounds(true);

    this.setGravityY(this.gravity);

    this.scene.anims.create({
      key: LinkNes2AnimationKeysEnum.IDLE,
      frames: [{ key: texture, frame: 0 }],
    });
    this.scene.anims.create({
      key: LinkNes2AnimationKeysEnum.WALKING,
      frames: this.scene.anims.generateFrameNumbers(texture, { start: 1, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: LinkNes2AnimationKeysEnum.DUCKING,
      frames: [{ key: texture, frame: 4 }],
    });
    this.scene.anims.create({
      key: LinkNes2AnimationKeysEnum.JUMPING,
      frames: this.scene.anims.generateFrameNumbers(texture, { frames: [4, 3] }),
      frameRate: 6,
      repeat: 0,
    });
    this.scene.anims.create({
      key: LinkNes2AnimationKeysEnum.LANDING,
      frames: [{ key: texture, frame: 4 }],
    });
  }

  update(time: number, delta?: number) {
    const { right, down, left, space } = this.cursors;
    const { down: bodyIsTouchingDown } = this.body.touching;

    // Character's movement horizontally
    if (right.isDown && !down.isDown) {
      this.setFlipX(false);
      this.setVelocityX(this.movementSpeed);
    } else if (left.isDown && !down.isDown) {
      this.setFlipX(true);
      this.setVelocityX(-this.movementSpeed);
    } else {
      this.setVelocityX(0);
    }

    // Character's movement vertically
    if (space.isDown && bodyIsTouchingDown) {
      this.setVelocityY(-this.jumpPower);
    } else if (down.isDown) {
      this.body.setSize(16, 28);
      this.body.setOffset(0, 4);
    } else {
      this.body.setSize(16, 32);
      this.body.setOffset(0, 0);
    }

    // Character's animation
    if (!bodyIsTouchingDown) {
      // If the character isn't touching down, it means that is jumping. But the jumping animation
      // needs to be played only once.
      if (this.anims.currentAnim?.key !== LinkNes2AnimationKeysEnum.JUMPING) {
        this.anims.play(LinkNes2AnimationKeysEnum.JUMPING);
      }
    } else {
      // The landing animations should be played the time defined by its cool down. Meanwhile, the
      // rest of the animations must wait.
      if (
        this.anims.currentAnim?.key !== LinkNes2AnimationKeysEnum.LANDING ||
        this.startLanding + this.landingCoolDown < time
      ) {
        // Play one animation if the character isn't jumping or landing.
        if (this.anims.currentAnim?.key === LinkNes2AnimationKeysEnum.JUMPING || down.isDown) {
          // Start landing animation.
          this.startLanding = time;
          this.anims.play(LinkNes2AnimationKeysEnum.LANDING, true);
        } else if (left.isDown || right.isDown) {
          this.anims.play(LinkNes2AnimationKeysEnum.WALKING, true);
        } else if (down.isDown) {
          this.anims.play(LinkNes2AnimationKeysEnum.DUCKING);
        } else {
          this.anims.play(LinkNes2AnimationKeysEnum.IDLE);
        }
      }
    }
  }
}
