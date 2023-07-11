let main_div = document.querySelector(".main-div");
let container = document.querySelector(".container")
let btn_boxes = Array.from(document.querySelectorAll(".button"));
let restart_btn = document.querySelector(".Restart");
let endingText=document.querySelector(".end-text");
let endingBox=document.querySelector(".end-game");
let winWays = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
let box_items = Array(btn_boxes.length);
box_items.fill("")
var turn_X = "X";
var turn_O = "O";
var currentPlayer = turn_X;
var game_end = false;


btn_boxes.forEach((box) => {
  box.addEventListener("click", play);
});

function hover() {
let  hoverTurn=(currentPlayer+"-hover");

  btn_boxes.forEach((box) => {
    box.classList.remove("X-hover");
    box.classList.remove("O-hover");
  });

  btn_boxes.forEach((box) => {
    if (box.innerText == "") {
      box.classList.add(hoverTurn);
}
  })

}
function hidden(){
  endingBox.classList.add("invisible");
  console.log(currentPlayer);
  restart_btn.classList.add("invisible");
}
hidden();
hover();
function play(e) {
  let activeBox = e.target;
  let box_num = e.target.id;

  if (activeBox.innerText != "") {
    return;
  }

  if (currentPlayer === turn_X) {
    activeBox.innerText = turn_X;
    box_items[box_num] = turn_X;
    currentPlayer = turn_O;
    console.log(box_items);

  } else {
    activeBox.innerText = turn_O;
    box_items[box_num] = turn_O;
    currentPlayer = turn_X;
    console.log(box_items);

  }

checkWinner();
hover();
}

let checkWinner = function checkWinner() {
  for (var win of winWays) {
    let value1 = box_items[win[0]];
    let value2 = box_items[win[1]];
    let value3 = box_items[win[2]];
    if (value1 !== "" && value1 === value2 && value1 === value3) {
      btn_boxes.forEach((box)=>{
        box.disabled=true;
      })
      restart_btn.classList.remove("invisible");
      endingBox.classList.remove("invisible");
      endingText.innerText="Player "+value1 + " wins";
      main_div.classList.add("invisible");
      console.log(value1 + " wins");

return
    }
  };let draw = box_items.every((boxes) => boxes !== "")
  if (draw) {
    console.log("its a draw");
    endingBox.classList.remove("invisible");
    restart_btn.classList.remove("invisible");
    endingText.innerText="It is a draw";
    main_div.classList.add("invisible")
    btn_boxes.forEach((box)=>{
      box.disabled=true;
    })
    return
  };
};

restart_btn.addEventListener("click",restart);
function restart(){
  btn_boxes.forEach((item) => {
item.innerText="";
item.disabled=false;
main_div.classList.remove("invisible")
});
hidden();
hover();
box_items.fill("")
};
