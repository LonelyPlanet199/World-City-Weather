function createSunRays(card) {
    const sun = card.querySelector('.sun');
    const numRays = 12;
    for (let i = 0; i < numRays; i++) {
        const ray = document.createElement('div');
        ray.className = 'sun-ray';
        const angle = (i * (360 / numRays));
        ray.style.width = '40px';
        ray.style.height = '3px';
        ray.style.transform = `rotate(${angle}deg) translateX(40px)`;
        ray.style.animation = `pulse ${2 + Math.random()}s infinite alternate`;
        ray.style.animationDelay = `${i * 0.2}s`;
        card.appendChild(ray);
    }
}

function createRaindrops(card) {
    const numDrops = 20;
    for (let i = 0; i < numDrops; i++) {
        const drop = document.createElement('div');
        drop.className = 'raindrop';
        const left = 50 + Math.random() * 140;
        drop.style.left = `${left}px`;
        drop.style.top = '80px';
        const duration = 1 + Math.random() * 1;
        drop.style.animation = `rain ${duration}s linear infinite`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        card.appendChild(drop);
    }
}

function createSnowflakes(card) {
    const numFlakes = 30;
    const snowflakeChars = ['❄', '❅', '❆', '*', '·'];
    for (let i = 0; i < numFlakes; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
        const size = 8 + Math.random() * 10;
        flake.style.fontSize = `${size}px`;
        const left = 30 + Math.random() * 180;
        flake.style.left = `${left}px`;
        flake.style.top = '80px';
        const duration = 3 + Math.random() * 4;
        flake.style.animation = `snowfall ${duration}s linear infinite`;
        flake.style.animationDelay = `${Math.random() * 5}s`;
        card.appendChild(flake);
    }
}

function createWindElements(card) {
    for (let i = 0; i < 3; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'wind-cloud';
        const width = 40 + Math.random() * 80;
        const height = width * 0.35;
        cloud.style.width = `${width}px`;
        cloud.style.height = `${height}px`;
        const top = 20 + (i * 40);
        cloud.style.top = `${top}px`;
        const duration = 8 + Math.random() * 6;
        cloud.style.animation = `windCloud ${duration}s linear infinite`;
        cloud.style.animationDelay = `${i * 2}s`;
        card.appendChild(cloud);
    }
    for (let i = 0; i < 15; i++) {
        const line = document.createElement('div');
        line.className = 'wind-line';
        const width = 20 + Math.random() * 50;
        line.style.width = `${width}px`;
        const top = 50 + Math.random() * 200;
        line.style.top = `${top}px`;
        const duration = 2 + Math.random() * 3;
        line.style.animation = `windLine ${duration}s linear infinite`;
        line.style.animationDelay = `${Math.random() * 5}s`;
        card.appendChild(line);
    }
}

function createLightning(card) {
    const numBolts = 3;
    for (let i = 0; i < numBolts; i++) {
        const bolt = document.createElement('div');
        bolt.className = 'lightning';
        bolt.style.left = `${50 + Math.random() * 140}px`;
        bolt.style.top = '40px';
        bolt.style.animationDelay = `${Math.random() * 1.5}s`;
        card.appendChild(bolt);
    }
}

function createMist(card) {
    const numLayers = 5;
    for (let i = 0; i < numLayers; i++) {
        const mist = document.createElement('div');
        mist.className = 'mist-layer';
        mist.style.top = `${20 + i * 40}px`;
        mist.style.animationDelay = `${i * 1}s`;
        card.appendChild(mist);
    }
}

function createDust(card) {
    const numParticles = 20;
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'dust-particle';
        particle.style.left = `${Math.random() * 200}px`;
        particle.style.top = `${50 + Math.random() * 200}px`;
        particle.style.animationDelay = `${Math.random() * 1}s`;
        card.appendChild(particle);
    }
}

function createTornado(card) {
    const tornado = document.createElement('div');
    tornado.className = 'tornado';
    tornado.style.left = '50%';
    tornado.style.top = '100px';
    card.appendChild(tornado);
}

export { createSunRays, createRaindrops, createSnowflakes, createWindElements, createLightning, createMist, createDust, createTornado };