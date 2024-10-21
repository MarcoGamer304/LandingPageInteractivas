import { updateScore } from './score.js';

let score = 0;

export function createStars(scene, platforms) {
    const stars = scene.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    scene.physics.add.collider(stars, platforms);
    return stars;
}

export function collectStar(player, star, scene) {
    star.disableBody(true, true);
    score += 10;  
    updateScore(scene.scoreText, score);
    
    if (scene.stars && scene.stars.countActive(true) === 0) {
        scene.stars.children.iterate(function (child) {
            child.enableBody(true, child.x, 0, true, true);
        });

        const x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        const bomb = scene.bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
}
