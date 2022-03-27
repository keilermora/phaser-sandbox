import LinkNesSprites from '../../../assets/sprites/link-snes-sprites.png';

export const LinkSnesSpritesheetFileConfig: Phaser.Types.Loader.FileTypes.SpriteSheetFileConfig = {
  key: 'link-snes-spritesheet',
  url: LinkNesSprites,
  frameConfig: {
    frameWidth: 16,
    frameHeight: 24,
  },
};
