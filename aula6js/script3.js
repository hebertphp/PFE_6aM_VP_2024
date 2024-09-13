let a;
let saida = document.getElementById("saida");
a=parseInt(prompt("Digite um número"));//100
saida.innerHTML="a ="+ (a++);//a = 100
saida.innerHTML+="<br>a final ="+ a;//a final = 101
a=10;
a++;//11
a++;//12
++a;//13
saida.innerHTML+="<br>a ="+ a;//a = 13
a--;//12
a--;//11
--a;//10
--a;//9
saida.innerHTML+="<br>a ="+ a;//a = 9
