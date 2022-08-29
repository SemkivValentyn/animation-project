const setOfColors = [
    '#CDF0EA',
    '#F9F9F9',
    '#F7DBF0',
    '#BEAEE2',
    '#92A9BD',
    '#79B4B7',
    '#CAF7E3',
    '#FAF3F3',
    '#FFC288',
    '#FEA82F',
    '#D5ECC2',
    '#CAF7E3',
    '#F6DFEB',
    
]

function createSphere() {
    const section = document.getElementById('home')
    const sphere = document.createElement('span');

    let size = Math.random() * 30;

    sphere.style.width = 20 + size + 'px';
    sphere.style.height = 20 + size + 'px';

    sphere.style.top = Math.random() * innerHeight + 'px';
    sphere.style.left = Math.random() * innerWidth + 'px';

    const bg = setOfColors[Math.floor(Math.random() * setOfColors.length)];

    sphere.style.background = bg;

    section.appendChild(sphere);

    setTimeout(() =>{
        sphere.remove()
    },5000)

}

setInterval(createSphere, 100);

