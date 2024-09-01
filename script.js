
// Post Like Functionality

var cont = document.querySelector("#container");
var heart = document.querySelector("#heart");
var dblHeart = document.querySelector("#dblHeart");
var img = document.querySelector("#mainImg");
var likeCount = document.querySelector("#likeCount");

var count = 0;

heart.addEventListener("click", function () {
  if (count == 0) {
    heart.style.color = "red";
    likeCount.innerHTML = "994";
    count = 1;
    dblHeart.style.transform = "translate(-50%, -50%) scale(1)";
    img.style.filter = "blur(2px)";
    setTimeout(function () {
      dblHeart.style.transform = "translate(-50%, -50%) scale(0)";
      img.style.filter = "blur(0)";
    }, 1000);
  } else {
    heart.style.color = "black";
    likeCount.innerHTML = "993";
    count = 0;
  }
});

img.addEventListener("dblclick", function () {
  heart.style.color = "red";
  dblHeart.style.transform = "translate(-50%, -50%) scale(1)";
  img.style.filter = "blur(2px)";
  likeCount.innerHTML = "994";
  count = 1;
  setTimeout(function () {
    dblHeart.style.transform = "translate(-50%, -50%) scale(0)";
    img.style.filter = "blur(0)";
  }, 1000);
});
