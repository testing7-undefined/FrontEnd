let xx=document.body;
let newElement=document.createElement('div');
let rightPart=document.createElement('div');
rightPart.classList.add('right');

xx.appendChild(newElement);
xx.appendChild(rightPart);
// newElement.style.backgroundColor="red";
xx.style.display="flex";
xx.style.alignItems="stretch";
xx.style.justifyContent="center";
function nement(){
  newElement.classList.add('img');
  newElement.style.width="300px";
  newElement.style.height="300px";

  newElement.style.backgroundImage='url("i1.png")';
  newElement.style.backgroundSize="300px";
  newElement.style.display="flex";
  newElement.style.flexShrink="0";
  newElement.appendChild(document.createTextNode('00:00:00'));
  newElement.style.color="white";
  newElement.style.alignItems="center";
  newElement.style.justifyContent="center";
  newElement.style.fontSize="25px";
  let papapa=document.querySelector('div').innerHTML;
  //console.log(papapa);
// newElement.appendChild(document.createTextNode('00:00:00'));
}
nement();
function time(){
  let dd = new Date().getTime();
  let ok= dd/1000;
  let se=parseInt(ok%60);
  ok/=60;
  let m=parseInt(ok%60);
  ok/=60;
  let h=parseInt(ok%24);
  newElement.innerHTML=`${(h<10)?'0'+h:h}:${(m<10)?'0'+m:m}:${(se<10)?'0'+se:se}`
}
let interval=setInterval(time,1000);

function rrr(){
  rightPart.style.display="flex";
  rightPart.style.fontFamily="Verdana";
  rightPart.style.flex="1";
  rightPart.style.rowGap="10px";
  // rightPart.style.display="flex";
  // rightPart.style.alignItems="center";
  // rightPart.style.justifyContent="center";

  rightPart.style.flexDirection="column";
  hh();
  sel();
  fee();
  
}

function hh(){
  let heading=document.createElement('div');heading.classList.add('heading');
  rightPart.appendChild(heading);
  // heading.appendChild(document.createTextNode('Fit-Bit 19 The Smartest Watch'));
  let upper =document.createElement('p');
  upper.classList.add('data-heading');
  heading.appendChild(upper);
  upper.appendChild(document.createTextNode('Fit-Bit 19 The Smartest Watch'));
  upper.style.fontSize="30px";
  upper.style.fontWeight="600";
  let lorem=document.createElement('p');lorem.append(document.createTextNode('lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum  dolor lorem ipsum dolor'));
  heading.appendChild(lorem);
}

function sel(){
  //creating a selecting-color div (main)
  let sele=document.createElement('div');
  //adding class to main div
  sele.classList.add('select-color');
  //appending it to  rightPart
  rightPart.appendChild(sele);
  sele.style.display="flex";
  sele.style.columnGap="10px";
  sele.style.flexDirection="column";
  sele.style.rowGap="10px";
  //creating a paragraph heading 
  let hed=document.createElement('p');
  hed.style.fontSize="18px";
  hed.style.fontWeight="550";
  sele.appendChild(hed);
  hed.append(document.createTextNode('Select Color\n'));
  
  //creating a buttons div
  let cld=document.createElement('div');cld.classList.add('buttons');
  sele.append(cld);
  cld.style.display="flex";
  cld.style.columnGap="10px";
  let red=document.createElement('button'),blue=document.createElement('button'),black=document.createElement('button'),purple=document.createElement('button');
  red.classList.add('boot');
  blue.classList.add('boot');
  purple.classList.add('boot');
  black.classList.add('boot');
  red.style.backgroundColor=' #ca3d22';
  blue.style.backgroundColor="#565681";
  black.style.backgroundColor="#23211f";
  purple.style.backgroundColor=" #8a5362";
  // blue.style.backgroundColor='#565681';
  // blue.style.border="none";
  // blue.style.width="45px";
  // blue.style.height="30px";
  // blue.style.borderRadius="3px";
  
  cld.appendChild(black);
  cld.appendChild(red); 
  cld.appendChild(blue); 
  cld.appendChild(purple); 


  let but=document.querySelectorAll('.boot');
    for(let i=0;i<but.length;i++){
    but[i].style.border="none";
    but[i].style.width="45px";
    but[i].style.height="30px";
    but[i].style.borderRadius="3px";
    but[i].style.cursor="pointer";
    but[i].addEventListener('click',()=>{
      newElement.style.backgroundImage=`url(\"i${i+1}.png\")`;
    });
  }

}

function fee(){
  let feat=document.createElement('div');
  feat.classList.add('features');
  rightPart.appendChild(feat);
  let ppp=document.createElement('p');
  ppp.append(document.createTextNode('Features'));
  feat.append(ppp);
  ppp.style.fontSize="20px";
  ppp.style.fontWeight="550";

  let opendiv=document.createElement('div');
  feat.append(opendiv);

  let tt=document.createElement('button'),hrt=document.createElement('button');
  //console.log(tt,hrt);
  opendiv.appendChild(tt);
  opendiv.append(hrt);
  tt.classList.add('timet');
  hrt.classList.add('heart-rate');
  tt.append(document.createTextNode('Time'));
  hrt.append(document.createTextNode('Heart Rate'));
  opendiv.style.display="flex";
  opendiv.style.columnGap="5px";

  tt.addEventListener('click',()=>{
    clearInterval(interval);
    newElement.innerHTML="00:00:00";
    interval=setInterval(time,1000);
  });
  hrt.addEventListener('click',()=>{
    clearInterval(interval);
    newElement.innerHTML="hello";
  });
  let xnxx=opendiv.querySelectorAll('button');
  for(let i=0;i<xnxx.length;i++){
    xnxx[i].style.border="none";
    xnxx[i].style.height="30px";
    xnxx[i].style.cursor="pointer";
    xnxx[i].style.fontSize="15px";
    xnxx[i].style.borderRadius="3px";
    xnxx[i].style.backgroundColor="#a1a1a1";
  }

}
rrr();


function heart_rate(){

}