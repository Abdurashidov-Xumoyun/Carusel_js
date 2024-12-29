const btnLeft = document.querySelector(".btn_left");
const btnRight = document.querySelector(".btn_right");
const imgBox = document.querySelector(".img_box");
const imgAll = document.querySelectorAll(".img_box img");

console.log(imgAll);

let index = 0;

btnLeft.addEventListener("click", function change() {
  index--;
  changeImg()
  resetInterval()
});

btnRight.addEventListener("click", function change() {
  index++;
  changeImg()
  resetInterval()
});

function changeImg() {
  if (index > imgAll.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = imgAll.length - 1;
  }
  imgBox.style.transform = `translateX(${-index * 500}px)`;
}


let interval = setInterval(run, 3000)

function run() {
  index++;
  changeImg();
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}

