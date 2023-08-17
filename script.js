var time = 60; // countdown number
var hitNumber;
var score = 0;
var CorrectCount = 0;
var WrongCount = 0;
//For creating bubble in box
function bubbleCreate() {
  var clutter = "";
  for (var i = 1; i <= 126; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  // console.log(clutter)
  //insert bubble into .pbtm class
  document.querySelector(".pbtm").innerHTML = clutter;
}

// This function is made for reverse count of the time
function timerCount() {
  var timer = setInterval(function () {
    if (time > 0) {
      time--;
      //showing the time in box by selecting .timer class
      document.querySelector(".timer").textContent = time;
    } else {
      clearInterval(timer); //when timer stops exit the function
      document.querySelector(".pbtm").innerHTML = `<h1>Game Over☺</h1>`;
      var divElement = document.querySelector(".end");
      var totalHit = document.createElement("h4");
      var totalScore = document.createElement("h4");
      totalHit.textContent = `Total Hit: ${CorrectCount}`;
      totalScore.textContent = `Total Score: ${score}`;
      divElement.appendChild(totalScore);
      divElement.appendChild(totalHit);
      document.querySelector(".hit").textContent = "-";
      document.querySelector(".score").textContent = "-";
    }
  }, 1000);
}

//This function is for counting the hits
function getHitNumber() {
  hitNumber = Math.floor(Math.random() * 10);
  document.querySelector(".hit").textContent = hitNumber;
}

//this DOM is used for getting the numbers of bubble hit
document.querySelector(".pbtm").addEventListener("click", function (details) {
  var hitbtn = Number(details.target.textContent);
  if (hitbtn === hitNumber) {
    CorrectCount++;
    increaseScore();
    bubbleCreate();
    getHitNumber();
  }
});

//For increasing the score
function increaseScore() {
  score += 10;
  document.querySelector(".score").textContent = score;
}

//Funtion calling
bubbleCreate();
timerCount();
getHitNumber();
