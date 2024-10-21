export function createPlayer(scene, platforms) {
    const player = scene.physics.add.sprite(100, 650, 'dude');
    player.setBounce(0);
    player.setCollideWorldBounds(true);
    
    scene.anims.create({
        key: 'left',
        frames: scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'turn',
        frames: [{ key: 'dude', frame: 4 }],
        frameRate: 20
    });

    scene.anims.create({
        key: 'right',
        frames: scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    scene.physics.add.collider(player, platforms);
    return player;
}

export function updatePlayer(player, keyDictionary) {
    if (keyDictionary.has('ArrowLeft') || keyDictionary.has('KeyA')) {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    } else if (keyDictionary.has('ArrowRight') || keyDictionary.has('KeyD')) {
        player.setVelocityX(160);
        player.anims.play('right', true);
    } else {
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    if (keyDictionary.has('ArrowUp') && player.body.touching.down || keyDictionary.has('Space') && player.body.touching.down) {
        player.setVelocityY(-330);
    }
}