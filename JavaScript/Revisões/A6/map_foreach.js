/*
const array = [1,2,3,4,5,'guilherme']
const frutas = ['maçã','banana','goiaba']

let retornoMap = array.map ((item) => item * 2);
let retornoForEach = array.forEach ((item) => item * 2);

console.log (retornoMap)
console.log (retornoForEach)

let retornoFilter = frutas.filter((fruta) => fruta.includes('maçã'));

console.log (retornoFilter)
*/

const aluno1 = {
        idade: 21,
        nota: 5,
    }

const aluno2 ={
        idade: 22,
        nota: 6,
    }

function mapComThis (array, thisArg){
    return array.map(function (item){
        return item * this.nota;
    }, thisArg);
}

const nums = [1,2]

console.log ("Aluno 1: " + mapComThis(nums, aluno1))