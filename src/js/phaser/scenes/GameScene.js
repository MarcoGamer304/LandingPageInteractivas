import { createPlayer, updatePlayer } from '../entities/player.js';
import { createStars, collectStar } from '../entities/stars.js';
import { createBombs, hitBomb } from '../entities/bombs.js';

let player;
let stars;
let bombs;
const keyDictionary = new Set([]);

export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    create() {
        this.add.image(400, 300, 'sky');

        const platforms = this.physics.add.staticGroup();
        platforms.create(1000, 780, 'ground').setScale(5, 2).refreshBody();
        platforms.create(600, 600, 'ground');
        platforms.create(50, 450, 'ground');
        platforms.create(750, 420, 'ground');

        player = createPlayer(this, platforms);

        this.cameras.main.setBounds(0, 0, 3200, 800);
        this.physics.world.setBounds(0, 0, 3200, 800);
        this.cameras.main.startFollow(player);

        stars = createStars(this, platforms);
        bombs = createBombs(this, platforms);

        this.physics.add.overlap(player, stars, (player, star) => {
            collectStar(player, star, this);
        });

        this.physics.add.collider(player, bombs, (player, bomb) => {
            hitBomb(player, bomb, this);
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