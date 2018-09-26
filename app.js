

var form = document.querySelector("#form");
var res = document.querySelector("#res");
res.style.display="none";

form.addEventListener("click",function(e){

  e.preventDefault();

});
document.getElementById("add").onclick = function () {
  
  var num1 = Number(document.getElementById("input1").value);
  var num2 = Number(document.getElementById("input2").value);
  var answer = num1 + num2;

  res.style.display="block";
  res.innerHTML = "Here is your answer:  " + answer;
  form.reset();
}
document.getElementById("subtract").onclick = function () {
  var num1 = Number(document.getElementById("input1").value);
  var num2 = Number(document.getElementById("input2").value);
  var answer = num1 - num2;
  res.style.display="block";
  res.innerHTML = "Here is your answer:  " + answer;
  form.reset();
}

document.getElementById("multiply").onclick = function () {
  var num1 = Number(document.getElementById("input1").value);
  var num2 = Number(document.getElementById("input2").value);
  var answer = num1 * num2;
  res.style.display="block";
  res.innerHTML = "Here is your answer:  " + answer;
  form.reset();
}

document.getElementById("divide").onclick = function () {
  var num1 = Number(document.getElementById("input1").value);
  var num2 = Number(document.getElementById("input2").value);
 
  var answer = num1 / num2;
  if(num2===0){
    answer=0;
  }
  res.style.display="block";
  res.innerHTML = "Here is your answer:  " + answer;
  form.reset();
}
//document.getElementById("input1").onchange()=function (){
  //res.style.display="none";
//}

