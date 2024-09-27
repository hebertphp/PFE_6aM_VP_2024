let a,b,res;
let saida = document.getElementById("saida");
a="9";
b=10;
res=(a<b);//V
saida.innerHTML=`a = ${a} , b = ${b} <br>`;//a = 9 , b = 10
saida.innerHTML+=`a < b : ${(a<b)} <br>`;//a < b : true
saida.innerHTML+=`!( a < b) : ${!(a<b)}<br>`;// !(a < b) : falsa
saida.innerHTML+="res : "+typeof(a);//res : boolean , number , string