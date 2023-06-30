let scr=JSON.parse(localStorage.getItem('scre'));
document.querySelector('.correct').innerHTML=(scr.crc < 10)?'0'+scr.crc:scr.crc;
document.querySelector('.incorrect').innerHTML=(scr.inc < 10)?'0'+scr.inc:scr.inc;
document.querySelector('.boo').innerHTML= src.crc;
function try_again(){
  location.href="index.html";
}
