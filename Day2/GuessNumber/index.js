const againButton = document.querySelector('.again');
const num=document.querySelector('.number');
const guess=document.querySelector('.guess');
const checkBtn=document.querySelector('.check');
const message=document.querySelector('.message');
const score=document.querySelector('.score');
const highscore=document.querySelector('.highscore');

let random=Math.trunc(Math.random()*20)+1;
let scores=10;
console.log(random);

const checkfunc=()=>{
    const guessValue=Number(guess.value);
    if(!guessValue){
        message.textContent='No Number!';
    }else if(guessValue===random){
        message.textContent=' Correct Number!';
        num.textContent=random;
        document.body.style.backgroundColor='#60b347';
        num.style.width='30rem';
        if(scores>Number(highscore.textContent)){
            highscore.textContent=scores;
        }
    }else if(guessValue>random){
        if(scores>1){
            message.textContent=' Too High!';
            scores--;
            score.textContent=scores;
        }else{
            message.textContent=' You lost the game!';
            score.textContent=0;
        }
    }else if(guessValue<random){
        if(scores>1){
            message.textContent=' Too Low!';
            scores--;
            score.textContent=scores;
        }else{
            message.textContent=' You lost the game!';
            score.textContent=0;
        }
    }
}
const againfunc=()=>{
    scores=20;
    random=Math.trunc(Math.random()*20)+1;
    console.log(random);
    score.textContent=scores;
    message.textContent='Start guessing...';
    num.textContent='?';
    guess.value='';
    document.body.style.backgroundColor='black';
    num.style.width='15rem';
}