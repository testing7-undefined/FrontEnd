
const api= "https://opentdb.com/api.php?amount=10&type=multiple";

let counter=0;
let crc,inc,uns;
crc=inc=uns=0;

let score={
"inc":inc,
"crc":crc
};

async function onisa(){
  const response= await fetch(api);
  const jsondata= await response.json();
  const adr=jsondata.results;
  let arr=[];
  for(let i=0;i<adr.length;i++){
    let x=adr[i]["incorrect_answers"];
    x.push(adr[i]["correct_answer"]);
    x.sort();
    arr.push({
      "question": adr[i]["question"],
      "correct": adr[i]["correct_answer"],
      "a":x[0],
      "b":x[1],
      "c":x[2],
      "d":x[3]
    });
  }
  localStorage.setItem('kaka',JSON.stringify(arr));
}

let arr=JSON.parse(localStorage.getItem('kaka'));
open();
function open(){
  if(counter>=arr.length){
    location.href="score.html";
    return ;
  }
  document.querySelector('.count').innerHTML=`${(counter+1)<10?'0'+(counter+1) :(counter+1)}/10`;
  document.querySelector('.question').innerHTML=arr[counter].question;
  document.getElementById('a').innerHTML=arr[counter]["a"];
  document.getElementById('b').innerHTML=arr[counter]["b"];
  document.getElementById('c').innerHTML=arr[counter]["c"];
  document.getElementById('d').innerHTML=arr[counter]["d"];
}
function nxt(see){
  if(counter>=arr.length)return;
  check(see);counter++;open(); 
}
function check( see){
  let bb=document.querySelector(`#${see}`).innerHTML;
  if(bb==arr[counter]["correct"])score.crc++;
  else score.inc++;
  localStorage.setItem('scre',JSON.stringify(score));
}