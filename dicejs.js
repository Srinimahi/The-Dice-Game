
var randomNumber1=Math.ceil(Math.random()*6);
if (randomNumber1=== 1){
  document.querySelector(".im1").setAttribute('src','dice1.png');
}
else if(randomNumber1===2){
    
  document.querySelector(".im1").setAttribute('src','dice2.png');
}
else if(randomNumber1===3){
  
  document.querySelector(".im1").setAttribute('src','dice3.png');
}
else if(randomNumber1===4){
  
  document.querySelector(".im1").setAttribute('src','dice4.png');
}
else if(randomNumber1===5){
  
  document.querySelector(".im1").setAttribute('src','dice5.png');
}
else {
  
  document.querySelector(".im1").setAttribute('src','dice6.png');
}

var randomNumber2=Math.ceil(Math.random()*6);
if (randomNumber2=== 1){
  document.querySelector(".im2").setAttribute('src','dice1.png');
}
else if(randomNumber2===2){
    
  document.querySelector(".im2").setAttribute('src','dice2.png');
}
else if(randomNumber2===3){
  
  document.querySelector(".im2").setAttribute('src','dice3.png');
}
else if(randomNumber2===4){
  
  document.querySelector(".im2").setAttribute('src','dice4.png');
}
else if(randomNumber2===5){
  
  document.querySelector(".im2").setAttribute('src','dice5.png');
}
else {
  
  document.querySelector(".im2").setAttribute('src','dice6.png');
}
if(randomNumber1>randomNumber2){
  document.querySelector(".headd").innerHTML='Player 1 Wins'
}
else if(randomNumber2>randomNumber1){
  document.querySelector(".headd").innerHTML='PLayer 2 wins'
}
else{
  document.querySelector(".headd").innerHTML='Draw'
}



 
