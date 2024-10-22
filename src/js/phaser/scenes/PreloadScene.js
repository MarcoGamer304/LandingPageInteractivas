export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super('PreloadScene');
    }

    preload() {
        this.load.image('sky', '../../../../../public/gameAssets/imagenes/background2.png');
        this.load.image('ground', '../../../../../public/gameAssets/imagenes/platform.png');
        this.load.image('base', '../../../../../public/gameAssets/imagenes/floor.png');
        this.load.image('bigWall', '../../../../../public/gameAssets/imagenes/pared1.png');
        this.load.image('brick2', '../../../../../public/gameAssets/imagenes/brick2.png');
        this.load.image('brick3', '../../../../../public/gameAssets/imagenes/brick3.png');
        this.load.image('fondoCueva', '../../../../../public/gameAssets/imagenes/fondoCueva.png');
        this.load.image('star', '../../../../../public/gameAssets/imagenes/star.png');
        this.load.image('bomb', '../../../../../public/gameAssets/imagenes/bomb.png');
        this.load.spritesheet('dude', '../../../../../public/gameAssets/sprites/dude.png', {
            frameWidth: 32,
            frameHeight: 48
        });
    }

    create() {
        this.scene.start('GameScene');
    }
}