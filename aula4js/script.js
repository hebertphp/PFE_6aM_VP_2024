let oct = 10;
let bin = 0b100; 
let hexa = 0x10;
let dia, nota, cep;
dia = 10;//a variável dia recebe o valor 10
nota = 9.7;
cep = "01012123";
let saida = document.getElementById("saida");
saida.innerHTML="Sextou<br>";
saida.innerHTML+="Nota: "+nota;
saida.innerHTML+="<br>Dia: "+dia;
saida.innerHTML+="<br>oct: "+oct;
saida.innerHTML+="<br>bin: "+bin;
saida.innerHTML+="<br>hexa: "+hexa;
saida.innerHTML+="<br>cep: "+cep;
/*
saida.innerHTML="nota: "+nota;
saida.innerHTML+="<br>dia: "+dia;
saida.innerHTML+="<br>oct: "+oct;
saida.innerHTML+="<br>bin: "+bin;
saida.innerHTML+="<br>hexa: "+hexa;

decimal: 01234567 8  9  10
oct:     01234567 10 11 12
hex:     0123456789abcdef 10
*/