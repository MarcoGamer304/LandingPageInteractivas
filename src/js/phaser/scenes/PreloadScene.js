export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super('PreloadScene');
    }

    preload() {
        this.load.image('sky', '../../../../../public/gameAssets/imagenes/background.png');
        this.load.image('ground', '../../../../../public/gameAssets/imagenes/platform.png');
        this.load.image('star', '../../../../../public/gameAssets/imagenes/star.png');
        this.load.image('bomb', '../../../../../public/gameAssets/imagenes/bomb.png');
        this.load.spritesheet('dude', '../../../../../public/gameAssets/imagenes/dude.png', {
            frameWidth: 32,
            frameHeight: 48
        });
    }

    create() {
        this.scene.start('GameScene');
    }
}