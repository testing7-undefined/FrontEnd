//importScripts ;
let result="",user="";
let score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    loses:0,
    tie:0
};
let rr=`Wins: ${score.wins} &nbsp Loses: ${score.loses}  &nbsp Ties: ${score.tie}`;
document.querySelector('.hell').innerHTML=rr;
function computer(user,comp){
    let score=JSON.parse(localStorage.getItem('score')) || {
        wins:0,
        loses:0,
        tie:0
    };
    let x=Math.random();
    console.log('user selected is: '+ user);

    if(x<=1/3){
        if(user==='scissor') {
           result='Computer';
           score.loses++;
        }
        else if(user==='paper'){
           result='You';
           score.wins++;
        }
        else{
           result='Tie';
           score.tie++;
        }
      comp='rock';//result='Tie';
    }
    else if(x<=2/3){
        if(user==='rock'){
          result='Computer';
          score.loses++;
        }
        else if(user==='paper'){
          result='Tie';
          score.tie++;
        }
        else{
          result='You';
          score.wins++;
        }
      comp='paper';//result='Computer';
    }
    else {
        if(user==='rock'){
          result='You';
          score.wins++;
        }
        else if(user==='paper'){
          result='Computer';
          score.loses++;
        }
        else {
          result='Tie';
          score.tie++;
        }
      comp='scissor';//result='You';
    }
    localStorage.setItem('score',JSON.stringify(score));
    //console.log('user selected is: '+ user);
    console.log('computer selected is: '+comp);
    console.log('The winner is :'+(result));
    console.log(`Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.tie}`);
    let rr=`You : <img src="${user}.png"> <img src="${comp}.png"> : Computer`;
    let rwil=`<h3>Winner : ${result}</h3>`,ore=`Wins: ${score.wins} &nbsp Loses: ${score.loses} &nbsp Ties: ${score.tie}`;
    document.querySelector('.hell').innerHTML=rr;
    document.querySelector('.wil').innerHTML=rwil;
    document.querySelector('.result').innerHTML=ore;
  }
function reset(){
  score.wins=0,score.loses=0,score.tie=0;
 // let iv=(`\nWins: ${score.wins} Loses: ${score.loses} Ties: ${score.tie}`);
  //document.querySelector('.jj').innerHTML=iv;
  //score.wins=0,score.loses=0,score.tie=0;
  localStorage.setItem('score',JSON.stringify(score));
  let rr=`Wins: ${score.wins} &nbsp Loses: ${score.loses} &nbsp Ties: ${score.tie}`;
  document.querySelector('.hell').innerHTML='';
  document.querySelector('.result').innerHTML=rr;
  console.log(`Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.tie}`);
  }