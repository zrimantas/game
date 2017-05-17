/**
 * Created by Rimantas on 2017-05-15.
 */
let targetNumber = Math.floor(Math.random() * 10) + 1;


function check () {
    var x = document.getElementById("inputas").value;
    var y = 0;
    console.log(x);
    console.log(targetNumber);
    if(x === targetNumber){
        showWin();
    }else if( x !== targetNumber && y > 5){
        showLoss();
    }else {
        showError();
    }
    y++;
}

function showWin() {
    document.getElementById("text").innerHTML = "you win";
}
function showError() {
    document.getElementById("text").innerHTML = "your guess is incorect";
}
function showLoss() {
    document.getElementById("text").innerHTML = "you lose";
    document.getElementById("inputas").innerHTML = "";
}