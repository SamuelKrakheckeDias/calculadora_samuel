function somar(num1, num2) {
  
  alert ("A soma é " + (num1 + num2));
}

function subtrair (num1, num2) {

  alert ("A subtração é " + (num1 - num2));

}

function multiplicar (num1, num2) {

  alert ( "A multiplicação é " + (num1 * num2));

}

function dividir (num1, num2) {

   alert ("A divisão é " (num1 / num2));

}

num1 = Number(prompt("Digite um número"));
num2 = Number(prompt("Digite outro número"));
operacao = prompt("Digite a operação");

switch (operacao) {


  case "+":
        somar(num1, num2);
   break
 
 case "-":
        subtrair(num1, num2);

   break
   case "*":
        multiplicar(num1, num2);
   break

   case "/":
        dividir(num1, num2);
   break

    default : alert ("Você não digitou nenhuma operação");

}
