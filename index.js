let a00 = document.getElementById("a00");
let a01 = document.getElementById("a01");
let a02 = document.getElementById("a02");
let a10 = document.getElementById("a10");
let a11 = document.getElementById("a11");
let a12 = document.getElementById("a12");
let a20 = document.getElementById("a20");
let a21 = document.getElementById("a21");
let a22 = document.getElementById("a22");
let arr = [
    [a00, a01, a02],
    [a10, a11, a12],
    [a20, a21, a22],
];


let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let start = document.getElementById("start");

// console.log(player1.value)
// console.log(player2.value)
// if ((player1.value != "") && (player2.value != "")) {
//     start.disabled = false;    
// }

function Tosscoin(){
    let ab = Math.floor(Math.random()*2);
    if(ab==0)
        document.getElementById("firstmove").innerText="It's heads!! And Player 1 goes first.";
    else
        document.getElementById("firstmove").innerText="It's tails!! And player 2 goes first.";
}
let n = 0;
function clickin(element) {
    n++;
    if (n % 2 != 0) {
        element.innerText = "O";
        element.style.background = "lightgreen";
    }
    else {
        element.innerText = "X";
        element.style.background = "red";
    }
    checkresult();
}
function checkresult() {
    for (let i = 0; i < 3; i++) {
        if ((arr[i][0].innerText == arr[i][1].innerText && arr[i][1].innerText == arr[i][2].innerText && arr[i][0].innerText != "") || (arr[0][i].innerText == arr[1][i].innerText && arr[1][i].innerText == arr[2][i].innerText && arr[2][i].innerText != "")) {
            winningpage();
        }
    }
    if ((arr[0][0].innerText == arr[1][1].innerText && arr[2][2].innerText == arr[1][1].innerText && arr[0][0].innerText != "") || (arr[2][0].innerText == arr[1][1].innerText && arr[1][1].innerText == arr[0][2].innerText && arr[1][1].innerText != "")) {
        winningpage();
    }
    else if (n >= 9)
        drawpage();
}
function winningpage() {
    if(n%2==1 && ab==0)
        alert("Player 1 won!!");
    else if(n%2==1 && ab==1)
        alert("Player 2 won!!");
    else if(n%2==0 && ab==0)
        alert("Player 2 won!!");
    else
        alert("Player 1 won!!");
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            arr[i][j].innerText = "";
            arr[i][j].style.background = "black";
        }
    }
    n = 0;
    console.log("winner winner chicken Dinner");
}
function drawpage() {
    alert("Draw!!");
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            arr[i][j].innerText = "";
            arr[i][j].style.background = "black";
        }
    }
    console.log("Game Drawn");
    n = 0;
}