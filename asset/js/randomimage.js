var imageURLs = [
    "/asset/image/logo.png"
];
function randomimage(){
    var img = '<img src=\"';
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
    img += '\" alt=\"Cute!!\"/>';
    return img;
}