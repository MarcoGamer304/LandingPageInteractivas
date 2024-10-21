export function createBombs(scene, platforms) {
    const bombs = scene.physics.add.group();
    scene.physics.add.collider(bombs, platforms);
    return bombs;
}

export function hitBomb(player, bomb, scene) {
    scene.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');
    scene.scene.restart();
}
