/*
function trocaPares (array) {
    if (!array.length) return console.log(-1);

    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            array[i] = 0
        }
    }
    return array;
}

let numeros = [1,2,3,4,5,6,7,8,9,10]

trocaPares (numeros)

console.log (trocaPares (numeros))
*/

function substituiPares (array){
    if (!array.length) return console.log(-1);
    
    for (let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log ("Você já é zero!")
        } else if (array[i] % 2 === 0){
            console.log (`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;
}

let arr = [1,2,3,5,6,7,8,10,12,15]
console.log (substituiPares(arr))