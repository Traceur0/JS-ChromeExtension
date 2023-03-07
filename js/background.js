const imgSrc = [
    "bg0.jpg", 
    "bg1.jpg",
    "bg2.jpg",
];

const imgSrcSel = imgSrc[Math.floor(Math.random() * imgSrc.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${imgSrcSel}`;

document.body.appendChild(bgImg);