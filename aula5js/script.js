const pi = 3.14;
const nao_muda = "Saída<br>";
let x , y;
y = 3;
y = 2;
//pi = 5;//const não pode mudar o valor
x = y * pi;//6.28
let saida = document.getElementById("saida");
saida.innerHTML=nao_muda+"x = "+ x;