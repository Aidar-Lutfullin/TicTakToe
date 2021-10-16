const boxCube = document.getElementById("box__cube");

let move = 0;
let result = "";
const boxPlayer = document.getElementById("box__player-x-o");
const boxText = document.getElementById("box__text");
const Newgame = document.getElementById("box__player-newgame");

boxCube.addEventListener("click", (e) => {
  if ((e.target.className = "box__cube-square")) {
    move % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "O");
    move++;
    if (move == 9) {
      result = "XOXOXO";
      prepareResult(result);
    }
    check();
  }
});

const check = () => {
  const boxCubeSquare = document.getElementsByClassName("box__cube-square");
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (i = 0; i < arr.length; i++) {
    if (
      boxCubeSquare[arr[i][0]].innerHTML == "X" &&
      boxCubeSquare[arr[i][1]].innerHTML == "X" &&
      boxCubeSquare[arr[i][2]].innerHTML == "X"
    ) {
      result = "X";
      prepareResult(result);
    } else if (
      boxCubeSquare[arr[i][0]].innerHTML == "O" &&
      boxCubeSquare[arr[i][1]].innerHTML == "O" &&
      boxCubeSquare[arr[i][2]].innerHTML == "O"
    ) {
      result = "O";
      prepareResult(result);
    }
  }
};

const prepareResult = (winner) => {
  boxPlayer.innerHTML = `${winner}`;
  boxText.style.display = "flex";
};

const closeModal = () => {
  boxText.style.display = "none";
  location.reload();
};

Newgame.addEventListener("click", closeModal);
