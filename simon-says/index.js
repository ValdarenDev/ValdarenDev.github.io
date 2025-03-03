var gameStarted = false;
var correctArray = [];
var guesses = 0;
var level = 0;

$("div.btn").on("click", function (e) {
  checkColor(e.target.id);
});

$(document).on("keydown", function () {
  if (gameStarted === false) {
    startGame();
  }
});

$(document).on("click", function () {
  if (gameStarted === false) {
    startGame();
  }
});

function startGame() {
  gameStarted = true;
  var correctArray = [];

  nextLevel();
}

function nextLevel() {
  nextColor();
  updateTitle();
  level++;
  guesses = 0;
}

function nextColor() {
  var color;
  var randNum = Math.floor(Math.random() * 4);

  switch (randNum) {
    case 0:
      color = "green";
      correctArray.push(color);
      break;
    case 1:
      color = "red";
      correctArray.push(color);
      break;
    case 2:
      color = "yellow";
      correctArray.push(color);
      break;
    case 3:
      color = "blue";
      correctArray.push(color);
      break;
  }

  buttonPressed(color);

  console.log(correctArray[0]);
}

function buttonPressed(color) {
  $("div ." + color)[0].classList.add("pressed");
  playSound(color);
  setTimeout(function () {
    $("div ." + color)[0].classList.remove("pressed");
  }, 100);
}

function playSound(type) {
  var colorSound = new Audio("./sounds/" + type + ".mp3");
  colorSound.play();
}

function checkColor(colorClicked) {
  if (colorClicked === correctArray[guesses]) {
    playSound(colorClicked);
    buttonPressed(colorClicked);
    guesses++;
    if (guesses === level) {
      setTimeout(function () {
        nextLevel();
      }, 1000);
    }
  } else {
    endGame();
  }
}

function updateTitle() {
  $("#level-title").text("Level " + (level + 1));
}

function endGame() {
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 100);
  playSound("wrong");
  $("h1").text("Press A Key to Start");
  gameStarted = false;
  correctArray = [];
  guesses = 0;
  level = 0;
}
