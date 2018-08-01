var mainImage = document.getElementById('main-image');

mainImage.onclick = function() {
    var mainSrc = mainImage.getAttribute('src');
    if (mainSrc === "images/fox01.png") {
        mainImage.setAttribute('src', 'images/fox03.png');
    } else {
        mainImage.setAttribute('src', 'images/fox01.png');
    }
};
