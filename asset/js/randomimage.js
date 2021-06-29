var imageURLs = [
    "/asset/image/logo.png"//이스터에그로 가끔 다른거 나오게 할거임
];
function randomimage(){
    var img = '<img align=\"center\" src=\"';
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
    img += '\" alt=\"Cute!!\"/>';
    return img;
}