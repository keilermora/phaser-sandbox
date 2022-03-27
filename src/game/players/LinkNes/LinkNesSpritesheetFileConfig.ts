import LinkNesSprites from '../../../assets/sprites/link-nes-sprites.png';

export const LinkNesSpritesheetFileConfig: Phaser.Types.Loader.FileTypes.SpriteSheetFileConfig = {
  key: 'link-nes-spritesheet',
  url: LinkNesSprites,
  frameConfig: {
    frameWidth: 16,
    frameHeight: 16,
  },
};
