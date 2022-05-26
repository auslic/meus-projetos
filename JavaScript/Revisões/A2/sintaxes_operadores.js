function validacao (n1, n2){
    let if_equal = ''
    let if_soma10 = ''
    let if_soma20 = ''
    let soma = n1 + n2

    if (n1 == n2){
        equal = 'são'
    } else {
        equal = 'não são'
    }

    if (soma > 10){
        if_soma10 = 'maior'
    } else {
        if_soma10 = 'menor'
    }

    if (soma<20){
        if_soma20 = 'menor'
    } else {
        if_soma20 = 'maior'
    }

    console.log ("Os números " + n1 + " e " + n2 + " " + equal + " iguais. Sua soma é " + soma + ", que é " + if_soma10 + " que 10 e " + if_soma20 + " que 20")
}

validacao (1,3)

/*
Solução da professora

function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(10, 10));
*/