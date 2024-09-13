/*
Solicitar as entradas a seguir:
cidade (texto)
dia (número)
mês (texto)
ano (número)

Gerar a saída conforme exemplo:
Entrada
cidade: São Paulo
dia: 13
mês: setembro
ano: 2024

Saída:

São Paulo, 13 de setembro de 2024.

*/
const cidade=prompt("Digite a cidade");
const dia=parseInt(prompt("Digite o dia"));
const mes=prompt("Digite o mes");
const ano=parseInt(prompt("Digite o ano"));
let saida=document.getElementById("saida");
saida.innerHTML=`${cidade}, <b>${dia}</b> de <b>${mes}</b> de <b>${ano}</b>.`;
