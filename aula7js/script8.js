let a,b,c,d;
let saida = document.getElementById("saida");
a=50;
b=120;
c=200;
d=(a>=b) || !(a<=c);//f || f = f
saida.innerHTML=`OR d = ${d}`;