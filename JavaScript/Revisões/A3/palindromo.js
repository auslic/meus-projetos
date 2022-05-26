/*
let palavra = "ovo"

let palavraArray = palavra.split ("")

console.log (palavraArray)

let palavraInversa = ""

for (let i = palavraArray.length-1; i>=0; i--){
    palavraInversa = palavraInversa + palavraArray[i]
}

let palavraArrayInversa = palavraInversa.split ("")
console.log (palavraArrayInversa)

if (palavra == palavraInversa){
    console.log ("É um palíndromo.")
} else {
    console.log ("Não é um palíndromo.")
}
*/

/*
let palavra = "ovo"

let palavraArray = palavra.split ("")
console.log (palavraArray)

let palavraArrayInversa = palavraArray.reverse()

let palavraInversa = ""
for (let i = 0; i<palavraArrayInversa.length; i++){
    palavraInversa = palavraInversa + palavraArrayInversa[i]
}

console.log(palavraInversa)

console.log (palavraArrayInversa)

if (palavra == palavraInversa){
    console.log ("É um palíndromo.")
} else {
    console.log ("Não é um palíndromo.")
}
*/

/* solução da professora
function verificaPalindromo(string) {
	if (!string) return;
	console.log(string === string.split('').reverse().join(''));
}
verificaPalindromo('cat');
*/

/*
function varificaPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('asa');
*/