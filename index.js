let winMusic = new Audio("winning.mp3");
let audio = new Audio("click.wav");

// let gameover = new Audio("gameover.mp3");
let gameover = false;
let turnXO = "X";

// turn change function----
const changeTurn = ()=>{

    return turnXO ==="X"?"O":"X";
}
//function to check win--
const checkWin = ()=>{
    let boxTexts = document.getElementsByClassName("boxText")
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        
        if((boxTexts[e[0]].innerText===boxTexts[e[1]].innerText)&&(boxTexts[e[2]].innerText===boxTexts[e[1]].innerText)&&(boxTexts[e[0]].innerText !=="")){
                  document.querySelector('.info').innerText = "' " + boxTexts[e[0]].innerText +" '" + " Won";
                  gameover = true;
                  document.querySelector(".image").getElementsByTagName('img')[0].style.display = "block";
                  document.querySelector(".container").style.opacity = "0";
                  document.querySelector("#newMatch").style.display = "block";
                  document.querySelector("#reset").style.display = "none";
                  winMusic.play();
        }

    })

}

// game logic-------
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText");
    element.addEventListener('click',()=>{
        audio.play()
        if(boxText.innerText===""){
            
            boxText.innerText = turnXO;
            turnXO = changeTurn();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+"' "+turnXO+" '";

            }

        }
    })
});


//restart game--------
function restart(){
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element=>{
        element.innerHTML = "";
    })
}