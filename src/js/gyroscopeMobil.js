const gyroscopeInformation = document.getElementById('gyroscopeInformation')

setInterval(()=>{
    window.addEventListener('devicemotion', (event) => {
        const acceleration = event.acceleration; 
        const accelerationIncludingGravity = event.accelerationIncludingGravity; // Con gravedad
        const rotationRate = event.rotationRate; 
        
        gyroscopeInformation.innerText = `Aceleración X: ${acceleration.x}, Aceleración Y: ${acceleration.y}, Aceleración Z: ${acceleration.z}, Rotación Alpha: ${rotationRate.alpha}, Rotación Beta: ${rotationRate.beta}, Rotación Gamma: ${rotationRate.gamma}`
    });

},100)
