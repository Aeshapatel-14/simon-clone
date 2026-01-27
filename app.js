let gameSeq=[];
let userSeq=[];

let btns=["purple","yellow","blue","pink"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
    btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
    btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[]
    level++;
    h2.innerText=`Level ${level}`;

    let randInx=Math.floor(Math.random()*4);
    let randColor=btns[randInx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function checkAns(inx){
    if(userSeq[inx]===gameSeq[inx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else {
        h2.innerText=`game over! press any key to start...`;
        reset();
    }
}

function btnPress(){
    let btn=this;
    userflash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}


let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    gameSeq=[];
    level=0;
}