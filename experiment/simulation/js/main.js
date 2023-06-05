function changeImage() {
  const image = document.getElementById('gif_test');
  const currentImageSrc = image.src;


  if (currentImageSrc.includes('images/initial.png')) {
    image.src = 'images/lab.mp4';
    image.alt = 'Lab Gif';
  } else {
    image.src = 'images/initial.png';
    image.alt = 'initial 1';
  }
}
