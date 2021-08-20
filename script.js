score = 0;
cross = true;

document.onkeydown = function (e) {
  console.log("Key code is: ", e.keyCode);
  if (e.keyCode == 38) {
    taco = document.querySelector(".taco");
    taco.classList.add("taco-ani");
    setTimeout(() => {
      taco.classList.remove("taco-ani");
    }, 1000);
  }
  if (e.keyCode == 39) {
    taco = document.querySelector(".taco");
    tacoX = parseInt(
      window.getComputedStyle(taco, null).getPropertyValue("left")
    );
    taco.style.left = tacoX + 112 + "px";
  }
  if (e.keyCode == 37) {
    taco = document.querySelector(".taco");
    tacoX = parseInt(
      window.getComputedStyle(taco, null).getPropertyValue("left")
    );
    taco.style.left = tacoX - 112 + "px";
  }
};

setInterval(() => {
  taco = document.querySelector(".taco");
  gameOver = document.querySelector(".gameOver");
  ant = document.querySelector(".ant");

  tx = parseInt(window.getComputedStyle(taco, null).getPropertyValue("left"));
  ty = parseInt(window.getComputedStyle(taco, null).getPropertyValue("top"));

  ax = parseInt(window.getComputedStyle(ant, null).getPropertyValue("left"));
  ay = parseInt(window.getComputedStyle(ant, null).getPropertyValue("top"));

  offsetX = Math.abs(tx - ax);
  offsetY = Math.abs(ty - ay);

  console.log(offsetX, offsetY);

  if (offsetX < 100 && offsetY < 85) {
    gameOver.style.visibility = "visible";
    ant.classList.remove("ant-ani");
  } else if (offsetX < 120 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      aniDuration = parseFloat(
        window
          .getComputedStyle(ant, null)
          .getPropertyValue("animation-duration")
      );
      newDuration = aniDuration - 0.1;
      ant.style.animationDuration = newDuration + "s";
    }, 600);
  }
}, 100);

function updateScore(score) {
  scoreCont.innerHTML = " Your Score: " + score;
}
