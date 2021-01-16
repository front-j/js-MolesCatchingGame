const btn = document.querySelector("button");
const game = document.querySelector(".game");
const hole = document.querySelectorAll("td");

btn.addEventListener("click", Start);

let count = 0;

function Start() {
  btn.innerHTML = "<div>SCORE:  " + count + "</div>"; // 점수 창
  btn.classList.remove("start")
  Timer(); // 타이머

  let mole = "";
  // 두더지 생성
  function Up() {
    number = Math.floor(Math.random() * 9) + 1;
    mole = document.getElementById(number);
    mole.innerHTML = "<img class='target' src='images/up.png'/>";
    
    function Down() {
      mole.innerHTML = "<img src='images/hole.png'/>";
    }
    const target = document.querySelector(".target");
    target.addEventListener("click", Attack);
    setTimeout(Down, 1000);
  }
  upTime = setInterval(Up, 2000);

  // 클릭 시 이미지 변경 + 점수 카운트
  function Attack() {
    mole.innerHTML = "<img src='images/attacked.png'/>";
    count++;
    btn.innerHTML = "<div>SCORE:  " + count + "</div>";
  }
}

// 게임 종료
function Stop() {
  clearInterval(upTime);
  for (i = 0; i < 9; i++) {
    hole[i].innerHTML = "<img src='images/hole.png'/>";
  }
  game.classList.add("end")
  game.innerHTML="<div class='modal' onclick='location.reload()'><h2>"+count+" 점 입니다!</h2>다시 시작하려면 화면을 클릭해주세요.</div>"
}

function Timer() {
  const time = 30;
  window.setTimeout(Stop, 15000);
}
