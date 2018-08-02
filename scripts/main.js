var mainImage = document.getElementById('main-image');

mainImage.onclick = function() {
    var mainSrc = mainImage.getAttribute('src');
    var srcFirst = 'images/fox04.png';
    var srcSecond = 'images/fox05.png';
    if (mainSrc === srcFirst) {
        mainImage.setAttribute('src', srcSecond);
    } else {
        mainImage.setAttribute('src', srcFirst);
    }
};
