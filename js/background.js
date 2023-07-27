const images = [
    "0.png",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// javascript에서 HTMLElement 생성
const bgImage = document.createElement('img');
bgImage.src = `img/${chosenImage}`;

// 생성한 bgImage를 <body>에 append 시키기
// append가 아니라 prepend를 이용하면 맨 앞으로 온다
document.body.appendChild(bgImage);