const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

const bg = `url(${bgImage.src})`;

 // document.body.appendChild(bgImage);

document.body.style.backgroundImage = bg;
 document.body.style.backgroundRepeat = "no-repeat";
 document.body.style.backgroundSize = "cover";
