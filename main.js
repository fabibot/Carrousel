const imageList = ['blue', 'violet', 'yellow', 'green'];

function getImageDiv() {
  const imageLeft = document.querySelector('.imageLeft');
  const imageCenter = document.querySelector('.imageCenter');
  const imageRight = document.querySelector('.imageRight');
  const imageHide = document.querySelector('.imageHide');
  console.log(imageLeft, imageCenter, imageRight);
  return [imageLeft, imageCenter, imageRight, imageHide];
}

function slideLeft() {
  const imageDiv = document.querySelector('.allImage');
  const imageList = getImageDiv();
  console.log(imageList);
  imageList[0].classList.replace('imageLeft', 'imageCenter');
  imageList[1].classList.replace('imageCenter', 'imageRight');
  imageList[2].classList.replace('imageRight', 'imageHide');
  imageList[3].classList.replace('imageHide', 'imageLeft');
  imageDiv.insertBefore(imageList[3], imageList[0]);
}

function slideRight() {
  const imageDiv = document.querySelector('.allImage');
  const imageList = getImageDiv();
  console.log(imageList);
  imageList[0].classList.replace('imageLeft', 'imageHide');
  imageList[1].classList.replace('imageCenter', 'imageLeft');
  imageList[2].classList.replace('imageRight', 'imageCenter');
  imageList[3].classList.replace('imageHide', 'imageRight');
  imageDiv.removeChild(imageList[0]);
  imageDiv.appendChild(imageList[0]);
}

const leftArrow = document.querySelector('#left');
leftArrow.addEventListener('click', () => {
  slideLeft();
});

const rightArrow = document.querySelector('#right');
rightArrow.addEventListener('click', () => {
  slideRight();
});
