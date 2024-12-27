const btnLeft = document.querySelector(".btn_left");
const btnRight = document.querySelector(".btn_right");
const imgSrc = document.querySelector(".img");
btnLeft.style.backgroundColor = "rgba(206, 127, 109, 0.77)"

var elNumber = 0;

btnLeft.addEventListener("click", function () {
  if (elNumber > 0) {
    elNumber--;
    slideShow();
  }
  console.log(elNumber);
});

btnRight.addEventListener("click", function () {
  elNumber++;
  slideShow();

  if (elNumber == 0) {
    btnLeft.style.backgroundColor = "red"
  } else if (elNumber > 0) {
    btnLeft.style.backgroundColor = "rgba(241, 237, 231, 0.734)"
  }

});

function slideShow() {
  imgSrc.src = `https://picsum.photos/id/${elNumber}/500/500`
  if (elNumber == 0) {
    btnLeft.style.backgroundColor = "rgba(206, 127, 109, 0.77)"
  }
}






