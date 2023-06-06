function exercicioDois() 
{
	quantidadeNumeros = prompt("Digite a quantidade de numero");
	quantidadeNumeroConv = parseInt(quantidadeNumeros);// transformando em inteiro

	cont = 1;
	soma = 0;

	while(cont <= quantidadeNumeroConv){
		numeros = prompt("Digite o numero: ");
		soma = parseInt(soma) + parseInt(numeros);
		cont++;//cont = cont + 1;
	}

	media = soma / quantidadeNumeroConv;

	alert("A soma dos numeros é: " + soma);
}