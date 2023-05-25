window.onload = function () {
    var image = document.getElementById('image');
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
    var screenAspectRatio = screenWidth / screenHeight;
    var imageAspectRatio = image.naturalWidth / image.naturalHeight;

    if (screenAspectRatio > imageAspectRatio) {
      image.style.width = '100%';
      image.style.height = 'auto';
    } else {
      image.style.width = 'auto';
      image.style.height = '100%';
    }
  };