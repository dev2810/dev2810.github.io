// Functions
const playBoard = document.querySelector(".snake_board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high_score");
const timer = document.querySelector("#timer");

let gameover = false;
let foodx, foody;
let vx=0, vy=0;
let snakebody=[];
let setintervalid;
let score = 0;
let highscore = localStorage.getItem("high_score") || 0;
highScoreElement.innerText = `High Score: ${highscore}`;


let color = {
    1:'blue',2: 'yellow', 3:'red',
    4:'purple',5: 'orange', 6:'maroon',
    7:'pink',8:'white',9:'aquamarine'
};
let cr =[];
const colorgeneration=()=>{
    let color1 = 0;
    let color2 = 0;
    while (true) {
        var randomcolor = Math.floor(Math.random() *9 ) +1;
        if (randomcolor!=color1 && randomcolor!=color2 && cr.length!=3) {
            cr.push(randomcolor);
            console.log(randomcolor);
            color2=color1;
            color1=randomcolor;
        }
        else if (randomcolor!=color1 && randomcolor===color2 && cr.length!=3){
            continue;
        }
        else if (randomcolor===color1 && cr.length!=3){
            continue;
        }
        else{
            break;
        }
    }
}
colorgeneration();
console.log(cr);
console.log(color[cr[0]]);
    
//color - 1
var random_color1 = color[cr[0]];
console.log(random_color1);

var x =document.getElementById('sq1');
x.setAttribute('style',`background-color:${random_color1}`);
console.log(document.getElementById('sq1').style.backgroundColor);
//color - 2
var random_color2 = color[cr[1]];
var x = document.getElementById('sq2');
x.setAttribute('style',`background-color:${random_color2}`);
//color - 3
var random_color3 = color[cr[2]];
var x = document.getElementById('sq3');
x.setAttribute('style',`background-color:${random_color3}`);

/*const changefoodpostion=()=>{
    foodx = Math.floor(Math.random() * 30) +1;
    foody = Math.floor(Math.random() * 30) +1;
}
*/
const changefoodpostion=()=>{
    foodx1 = Math.floor(Math.random() * 30) +1;
    foody1 = Math.floor(Math.random() * 30) +1;
    foodx2 = Math.floor(Math.random() * 30) +1;
    foody2 = Math.floor(Math.random() * 30) +1;
    foodx3 = Math.floor(Math.random() * 30) +1;
    foody3 = Math.floor(Math.random() * 30) +1;
}
const gameoverprompt=()=>{
    clearInterval(setintervalid);
    alert("Game Over - Press OK to play again");
    location.reload();
}
const changedirection = (e) => {
    console.log(e);
    if(e.key === "ArrowUp"){
        vx = 0;
        vy = -1;
    }
    else if(e.key === "ArrowDown"){
        vx = 0;
        vy = 1;
    }
    else if(e.key === "ArrowLeft"){
        vx = -1;
        vy = 0;
    }
    else if(e.key === "ArrowRight"){
        vx = 1;
        vy = 0;
    }
}

time=30;
let j=0;
let snakex = 5, snakey = 10;
let counter = 0;
changefoodpostion();
const ingame=() =>{
    
    if(gameover){
        return gameoverprompt();
    }
    if (j===0){
        timer.innerHTML = 'Timer: 0:30';
    }
    j+=1;
    if (j%10===0 && time!=0){
        time-=1;
        timer.innerHTML = `Timer: 0:${time}`;
    }
    else if (time===0){
        return gameoverprompt();
    }
    var random_color1 = color[cr[0]];
    let htmlmarkup = `<div id="sq11" style="grid-area: ${foody1} / ${foodx1} ;background-color:${random_color1}"></div>`;
    var random_color2 = color[cr[1]];    
    htmlmarkup+=`<div id="sq22" style="grid-area: ${foody2} / ${foodx2} ;background-color:${random_color2}"></div>`;
    var random_color3 = color[cr[2]];    
    htmlmarkup+=`<div id="sq33" style="grid-area: ${foody3} / ${foodx3} ;background-color:${random_color3}"></div>`;
    
    /*
    if (snakex === foodx && snakey === foody){
        changefoodpostion();
        snakebody.push([foodx,foody]);
        score++;
        highscore = score >= highscore ? score :highscore;
        localStorage.setItem("high_score",highscore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highscore}`;    
    }
    */ 
    
    if (counter === 0 && snakex === foodx1 && snakey === foody1){
        snakebody.push([foodx1,foody1]);
        counter++;
        score++;
        foodx1=-1
        foody1=-1
        highscore = score >= highscore ? score :highscore;
        localStorage.setItem("high_score",highscore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highscore}`;    
    }
    else if (counter === 1 && snakex === foodx2 && snakey === foody2){
        snakebody.push([foodx2,foody2]);
        counter++;
        score++;
        foodx2=-1
        foody2=-1
        highscore = score >= highscore ? score :highscore;
        localStorage.setItem("high_score",highscore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highscore}`;    
    }
    else if (counter === 2 && snakex === foodx3 && snakey === foody3){
        snakebody.push([foodx3,foody3]);
        counter++;
        score++;
        foodx3=-1
        foody3=-1
        highscore = score >= highscore ? score :highscore;
        localStorage.setItem("high_score",highscore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highscore}`;    
    }
    
    if (counter===3){
        counter=0;
        colorgeneration();

        console.log(cr);
        console.log(color[cr[0]]);
    
        //color - 1
        var random_color1 = color[cr[0]];
        console.log(random_color1);

        var x =document.getElementById('sq1');
        x.setAttribute('style',`background-color:${random_color1}`);
        console.log(document.getElementById('sq1').style.backgroundColor);
        //color - 2
        var random_color2 = color[cr[1]];
        var x = document.getElementById('sq2');
        x.setAttribute('style',`background-color:${random_color2}`);
        //color - 3
        var random_color3 = color[cr[2]];
        var x = document.getElementById('sq3');
        x.setAttribute('style',`background-color:${random_color3}`);

        changefoodpostion();
        time+=6;
    }
    

    for (let i = snakebody.length -1 ; i>0  ; i--) {
        snakebody[i]=snakebody[i-1];
        
    } 
    snakebody[0]=[snakex,snakey];

    snakex += vx;
    snakey += vy;

    if (snakex < 0 || snakex > 30 || snakey < 0 || snakey > 30  ){
        gameover=true;
    }
    
    for (let i = 0; i < snakebody.length; i++) {
        htmlmarkup += `<div class="head" style="grid-area: ${snakebody[i][1]} / ${snakebody[i][0]}"></div>`;
        if( i!==0 && snakebody[i][0]===snakebody[0][0] && snakebody[i][1]===snakebody[0][1]){
            gameover=true;
        }
    }
    
    playBoard.innerHTML = htmlmarkup;   

}
changefoodpostion();
setintervalid = setInterval(ingame,100);
document.addEventListener("keydown",changedirection);
