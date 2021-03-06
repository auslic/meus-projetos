//Estudo de Objetos
//Objetivo do algoritmo: disponibilizar ao usuário as seguintes escolhas: da nave, de alterar ou parar a velocidade, de alterar a nave e de sair do sistema.

//Crio um array com 3 objetos, cada um com 3 características.
let spaceships = [
    {name: "Epoch", type: "Viajante", velocity: 0},
    {name: "Vader", type: "Guerreira", velocity: 0},
    {name: "Dune", type: "Transportadora", velocity: 0}
]

//Crio a única variável global que decidirá quais características dos objetos o algoritmo retornará
let chosenSpaceship = switchSpaceShips ()

//Após a escolha da nave, chama-se a função para outras 4 escolhas
switchSpeed ()

//Início e opção para o usuário
function switchSpaceShips () {
    
    //Prompt para a decisão
    let chosenSpaceship = prompt ("Escolha uma das seguintes naves disponíveis:" +
    "\n1) " + spaceships[0].name + " do tipo " + spaceships[0].type +
    "\n2) " + spaceships[1].name + " do tipo " + spaceships[1].type +
    "\n3) " + spaceships[2].name + " do tipo " + spaceships[2].type)

    //Laço para não escapar da escolha
    while (chosenSpaceship > 3){
        chosenSpaceship = prompt ("Opção incorreta." +
        "\nEscolha uma das seguintes naves disponíveis:" +
        "\n1) " + spaceships[0].name + " do tipo " + spaceships[0].type +
        "\n2) " + spaceships[1].name + " do tipo " + spaceships[1].type +
        "\n3) " + spaceships[2].name + " do tipo " + spaceships[2].type)
    }
    
    //Diminuição unitária da variável para a leitura correta posterior do Array
    chosenSpaceship --

    //Retorna o valor para a variável
    return chosenSpaceship 
}

//Menu principal para o algoritmo
function switchSpeed (){
    
    /*Crio uma variável local que irá englobar presentes nesse escopo
    Essa variável tem como valor o retorno da função speed, onde o usuário decide o que fazer com a nave escolhida*/
    let chosenSpeed = speed ()

    //Switch para decidir o que o algoritmo irá realizar de acordo com a escolha do usuário
    switch (chosenSpeed){
        case '1':
            //Note que neste e nos outros casos, utilizo a variável chosenSpaceship como indíce na busca da característica velocity dos objetos
            speedUp (spaceships[chosenSpaceship].velocity)
            break
        case '2':
            speedDown (spaceships[chosenSpaceship].velocity)
            break
        case '3':
            //Aqui atribuo um novo valor a variável chosenSpaceship para que a função switchSpeed receba o valor correto
            chosenSpaceship = switchSpaceShips ()
            switchSpeed ()
            break
        case '4': 
            //Condição caso o usuário decida parar.
            //Com isso o algoritmo alerta todos os objetos com suas respectivas características
            alert ("Nave: " + spaceships[0].name +
            "\nTipo: " + spaceships[0].type +
            "\nVelocidade atual: " + spaceships[0].velocity +
            "\n" +
            "\nNave: " + spaceships[1].name +
            "\nTipo: " + spaceships[1].type +
            "\nVelocidade atual: " + spaceships[1].velocity +
            "\n" +
            "\nNave: " + spaceships[2].name +
            "\nTipo: " + spaceships[2].type +
            "\nVelocidade atual: " + spaceships[2].velocity +
            "\n\nBoa viagem!")
            break
        default:
            alert ('')
    }
}

//Menu principal para o usuário
function speed (){
    
    //Com a variável local da função switchSpeed, o usuário irá decidir o que fazer com a nave
    chosenSpeed = prompt ("Nave: " + spaceships[chosenSpaceship].name + "." +
        "\nTipo: " + spaceships[chosenSpaceship].type + "." +
        "\n\nDigite a opção que você deseja realizar com a nave selecionada:" +
        "\n1) Alterar velocidade" +
        "\n2) Parar" +
        "\n3) Alterar nave" +
        "\n4) Nenhuma das opções")
 
    //Laço para não sair da escolha
    while (chosenSpeed>4) {
        chosenSpeed = prompt ("Opção inválida." +
        "\nDigite a opção que você deseja realizar com a nave selecionada:" +
        "\n1) Alterar velocidade" +
        "\n2) Parar" +
        "\n3) Alterar nave" +
        "\n4) Nenhuma das opções")  
    }  
    
    //Retorno do valor da varíavel
    return chosenSpeed
}   

//Função para acelerar a nave
function speedUp (velocitySpaceShip){

    //Atribuo ao paramêtro da função a característica velocity do objeto
    velocitySpaceShip = prompt ("A velocidade atual da nave " + spaceships[chosenSpaceship].name + " é de " + velocitySpaceShip + " km/s." +
    "\nDigite a velocidade que você deseja.")

    /*Estrutura de condição para regular velocidade conforme entrada do usuário, perceba que em ambas as situações,
     atribuo o valor também a caracterísica velocity do objeto em questão.
     Ao final, todas levam novamente ao menu principal do usuário*/
    if (velocitySpaceShip == 300){
        alert ("Velocidade máxima alcançada. A velocidade atual é de " + velocitySpaceShip + " km/s.")
        spaceships[chosenSpaceship].velocity = velocitySpaceShip
        switchSpeed ()
    } else if (velocitySpaceShip > 300){
        velocitySpaceShip = 300        
        alert ("Velocidade máxima ultrapassada. Alterando velocidade para " + velocitySpaceShip + " km/s.")
        spaceships[chosenSpaceship].velocity = velocitySpaceShip
        switchSpeed ()
    } else {
        alert ("A velocidade atual é de " + velocitySpaceShip + " km/s.")
        spaceships[chosenSpaceship].velocity = velocitySpaceShip
        switchSpeed ()
    }
}

//Função para parar a nave
function speedDown (velocitySpaceShip){
    //Caso a característica velocity do objeto seja zero, o sistema retorna ao menu.
    if (velocitySpaceShip == 0){
        alert ("A velocidade atual da nave " + spaceships[chosenSpaceship].name + " é de " + velocitySpaceShip + " km/s. Não é possível parar a nave pois a mesma se encontra imóvel." +
            "\nRetornando ao menu.")
            switchSpeed ()
    } else {
        alert ("A velocidade atual da nave " + spaceships[chosenSpaceship].name + " é de " + velocitySpaceShip + " km/s. Parando a nave.")
        velocitySpaceShip = 0
        spaceships[chosenSpaceship].velocity = velocitySpaceShip
        alert ("Nave parada com sucesso. A velocidade atual é de " + velocitySpaceShip + " km/s.")
        switchSpeed ()
    }
}

