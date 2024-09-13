let a,b;
let saida = document.getElementById("saida");
a=prompt("Digite o nome");//prof. 
b=prompt("Digite o sobrenome");//hebert
saida.innerHTML=`${a} texto de qq coisa com tag ${b}`;//novidade
b+=" ";
b+=a;
saida.innerHTML+=`<br>${b}`;//novidade