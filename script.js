var name1 = prompt("Enter name of player 1");
var name2 = prompt("Enter name of player 2");
document.querySelector("h3.name1").innerHTML=name1;
document.querySelector("h3.name2").innerHTML=name2;
var player1 = Math.random() * 6;
player1 = Math.floor(player1) + 1;
var player2 = Math.random() * 6;
player2 = Math.floor(player2) + 1;
var imgname1="images/dice"+player1+".png";
var imgname2="images/dice"+player2+".png";
document.querySelector("img.img1").setAttribute("src", imgname1);
document.querySelector("img.img2").setAttribute("src", imgname2);
if (player1 > player2){
  document.querySelector("h2").innerHTML="Winner is "+name1;
  document.querySelector("h2").style.visibility="visible";
}else if (player1==player2){
  document.querySelector("h2").innerHTML="Draw";
  document.querySelector("h2").style.visibility="visible";
}else{
  document.querySelector("h2").innerHTML="Winner is "+name2;
  document.querySelector("h2").style.visibility="visible";
}
