// 添加觸控事件監聽器
var slideIndex = 0;
var touchStartX = 0;
var touchEndX = 0;

var slideshow = document.querySelector(".slideshow-container");
slideshow.addEventListener("touchstart", handleTouchStart, false);
slideshow.addEventListener("touchend", handleTouchEnd, false);

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  touchEndX = event.changedTouches[0].clientX;

  if (touchStartX - touchEndX > 20) {
    showSlides(1); // 向左滑動，顯示下一張圖片
  } else if (touchEndX - touchStartX > 20) {
    showSlides(-1); // 向右滑動，顯示上一張圖片
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  slides[slideIndex - 1].style.display = "block";
}

// 自動輪播
function autoSlide() {
  showSlides(1);
  setTimeout(autoSlide, 7000); // 每秒自動切換
}

autoSlide(); // 啟動自動輪播

//關閉按鈕
function closeButton() {
  var adContainer = document.querySelector(".ad-container");
  adContainer.style.display = "none";
}
