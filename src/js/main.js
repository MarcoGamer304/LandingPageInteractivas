import PreloadScene from "./phaser/scenes/PreloadScene";
import GameScene from "./phaser/scenes/GameScene";

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
    },
    scene: [PreloadScene, GameScene]
};

export function initGame() {
    const game = new Phaser.Game(config);

    window.addEventListener('resize', () => {
        game.scale.resize(window.innerWidth, window.innerHeight);
    });

    window.addEventListener('orientationchange', () => {
        game.scale.resize(window.innerWidth, window.innerHeight);
    })
}

initGame();