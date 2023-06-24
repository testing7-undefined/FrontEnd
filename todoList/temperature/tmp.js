let x=0,y=0,z=0;
      function lala(){
        x=document.querySelector('.select').value;
        y=document.querySelector('.ok');
        z=document.querySelector('.time').value;
        if(z==0)z=0;
      }
      function frn(){
        lala();
        if(x==2)z=(z* (9/5))+32 ;
        else if(x==3)z=(z-273.15) * 9/5  +32 ;
        y.value=z+ '°F';
        console.log(x+' '+ + ' ' +z);
      }
      function cls(){
        lala();
        console.log(x+' '+ + ' ' +z);
        if(x==1)z=(z-32)*(5/9);
        else if(x==3)z=z-273.15;
        //z=z.toFixed(2);
        y.value=z + '°C';
      }
      function kln(){
        lala();
        if(x==1)z=(z-32)*(5/9) + 273.15;
        else if(x==2)z=z*1+273.15;
        y.value=z+' K';
      }