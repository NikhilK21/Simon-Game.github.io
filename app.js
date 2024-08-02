let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","blue","green"];

let started=false;
let level=0;
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    }    
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function levelUp(){
    userSeq=[];
    level++; 
    h3.innerText=`Level ${level}`;
    let rdmIdx=Math.floor(Math.random()*4);
    let rdmColor=btns[rdmIdx];
    let rdmBtn=document.querySelector(`.${rdmColor}`);
    gameSeq.push(rdmColor);
    // console.log(rdmIdx);
    // console.log(rdmColor);
    // console.log(rdmBtn);
    btnFlash(rdmBtn);
}

function checkAns(idx){
    

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h3.innerHTML=`Game Over! Your Score Was <b>${level}</b>  <br>Press Any Key To Start Game Again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="grey";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    btnFlash(btn);
    
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtn=document.querySelectorAll(".btn");
    for(btn of allBtn){
        btn.addEventListener("click",btnPress);
    }

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}