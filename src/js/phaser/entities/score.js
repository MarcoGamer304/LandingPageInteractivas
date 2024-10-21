export function createScoreText(scene) {
    return scene.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' });
}

export function updateScore(scoreText, score) {
    if (scoreText) {
        scoreText.setText('Score: ' + score);
    } else {
        console.error("ScoreText is undefined!");
    }
}