const images = [
    "0.webp", "1.webp", "2.webp", "3.webp", "4.webp", "5.webp"
]

const todayImage = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${todayImage}`;

document.body.appendChild(bgImg);