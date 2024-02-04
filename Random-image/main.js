//  document.addEventListener("DOMContentLoaded", randomImage);

const img = document.getElementById("myImg");

function randomImage() {
    const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
    const FolderPath = "images/"
    const randomImg = images[Math.floor(Math.random() * images.length)];
    const imagesUrl = FolderPath + randomImg;
    img.src = imagesUrl;

}
setInterval(randomImage, 2000);






