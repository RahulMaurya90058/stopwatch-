
let hour=0;
let min=0;
let sec=0;
let timer;


let h1=document.querySelector(".time")


function timeupdate(){
    h1.innerText = 
      `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

function start(){
if(!timer){
  
   timer= setInterval(() => {
sec++;
if(sec===60){
    min++;
    sec=0;
}
if(min==60){
    min=0;
    hour++;
}
timeupdate();
},1000)
}
}


function stop(){
    clearInterval(timer)
    timer=null;
}

function reset(){
    stop();
    sec=0;
    min=0;
    hour=0;
    h1.innerText="00:00:00"
}