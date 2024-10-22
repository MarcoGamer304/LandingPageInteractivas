
const points = document.getElementById('points');
let score = 0;

export function createStars(scene, platforms) {

    const stars = scene.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 90, y: 70, stepX: 150 }
    });

    stars.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.3));
    });

    scene.physics.add.collider(stars, platforms);
    return stars;
}

export function collectStar(player, star, scene) {
    star.disableBody(true, true);
    score += 10;
    points.innerText = score;

    if (scene.stars && scene.stars.countActive(true) === 0) {
        scene.stars.children.iterate(function (child) {
            child.enableBody(true, child.x, 0, true, true);
        });
    }
}
