let aluno, nota;
aluno = "Astrogildo";
nota = "8.5"+0.5;//"8.50.5"
nota =  8.5 + 0.5;//9
let saida = document.getElementById("saida");
saida.innerHTML="nota: "+nota;//nota: 9
saida.innerHTML+="<br>aluno: "+aluno;//aluno: Astrogildo
let h1 = document.querySelector("h1");
h1.innerHTML+=" - Javascript";