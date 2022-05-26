var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0
var increment = document.getElementById('adicionar')
var decrement = document.getElementById('subtrair')

increment.addEventListener("click",function(){
    if (currentNumber >= 0){
        currentNumberWrapper.style.color='black'
    }

    if (currentNumber >= 10){
        alert("Limite alcançado. Resetando contagem")
        currentNumber = 0
        currentNumberWrapper.innerHTML = currentNumber
    } else {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber
    }
});

decrement.addEventListener("click",function(){

    if (currentNumber <= 0){
        currentNumberWrapper.style.color='red'
    } 
    
    if (currentNumber <= -10){
        alert("Limite alcançado. Resetando contagem")
        currentNumber = 0
        currentNumberWrapper.innerHTML = currentNumber
    } else {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber
    }
})