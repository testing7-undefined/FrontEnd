let d,h,m,s,ot,ct,ts,st,b;
      d=h=m=s=0;
      var op;
      function start(){
        
        stop();
        ot=Date.now();
        op=setInterval(()=>{
          time();
        },100);
      }
      function stop(){
        clearInterval(op);
      }
      function time(){
        ct=Date.now();
        ts=ct-ot;
        ts/=1000;// converts into seconds 
        s=ts%60;//calc sec
        ts/=60;//concerts into min
        m=ts%60;//calc min
        ts/=60;//converts int hrs 
        h=ts%24;//calc hrs
        ts/=24;//converts into days 
        d=ts;//calc days
        output();
      }
      function output(){
        b=(` ${d<10?'0'+Math.round(d):Math.round(d)}:${h<10?'0'+Math.round(h):Math.round(h)}:${m<10?'0'+Math.round(m):Math.round(m)}:${s<10?'0'+Math.round(s):Math.round(s)}`);
        document.querySelector('.time').innerHTML=b;
      }
      function reset(){
        stop();
        d=h=m=s=0;
        output();
      }