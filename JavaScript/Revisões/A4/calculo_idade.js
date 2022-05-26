function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Guilherme',
    idade: 21,
}

const pessoa2 = {
    nome: 'Letícia',
    idade: 20,
}

console.log(calculaIdade.call(pessoa1, 30))
console.log(calculaIdade.apply(pessoa2, [15]))