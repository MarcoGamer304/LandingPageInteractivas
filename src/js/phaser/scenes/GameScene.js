import { createPlayer, updatePlayer } from '../entities/player.js';
import { createStars, collectStar } from '../entities/stars.js';

let player;
let stars;

const keyDictionary = new Set([]);

import datos from '../../../plataformas.json';
export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    create() {
        const levelData = datos;
        this.add.image(levelData.background.x, levelData.background.y, levelData.background.image);

        const platforms = this.physics.add.staticGroup();
        levelData.platforms.forEach(platform => {
            platforms.create(platform.x, platform.y, platform.image).refreshBody();
        });

        player = createPlayer(this, platforms);

        this.cameras.main.setBounds(0, 0, 3200, 800);
        this.physics.world.setBounds(0, 0, 3200, 800);
        this.cameras.main.startFollow(player);

        stars = createStars(this, platforms);

        this.physics.add.overlap(player, stars, (player, star) => {
            collectStar(player, star, this);
        });
    }

    update() {
        updatePlayer(player, keyDictionary);
    }
}

document.addEventListener('keydown', (event) => {
    keyDictionary.add(event.code);
})

document.addEventListener('keyup', (event) => {
    keyDictionary.delete(event.code);
})