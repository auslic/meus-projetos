//Função que incrementa a variável cont
function roundIncrease (roundNumber){
    cont ++
}

//Função do Jogador 1
function roundP1 (){

    //Alerta da Rodada com o cont
    alert ("RODADA "+cont)
    roundIncrease (cont)

    //Escolha do jogador 1
    let TurnP1 = prompt (
    "                                               "+game[[1,1]]+"  |  "+game[[1,2]]+"  |  "+game[[1,3]]+"  " +
    "\n                                             _____________" +
    "\n                                               "+game[[2,1]]+"  |  "+game[[2,2]]+"  |  "+game[[2,3]]+"  " +
    "\n                                             _____________" +
    "\n                                               "+game[[3,1]]+"  |  "+game[[3,2]]+"  |  "+game[[3,3]]+"  " +
    "\n\n" +
    p1Name + ", escreva o número da posição que você deseja preencher com o X.")

    //Laço da escolha caso ultrapasse 9, a última opção do jogo
    if (TurnP1 > 9){
        do{
            TurnP1 = prompt ("Opção não reconhecida. Escreva o número da posição que você deseja preencher com o X.\n\n"+
                "                                               "+game[[1,1]]+"  |  "+game[[1,2]]+"  |  "+game[[1,3]]+"  " +
                "\n                                             _____________" +
                "\n                                               "+game[[2,1]]+"  |  "+game[[2,2]]+"  |  "+game[[2,3]]+"  " +
                "\n                                             _____________" +
                "\n                                               "+game[[3,1]]+"  |  "+game[[3,2]]+"  |  "+game[[3,3]]+"  " +
                "\n")
        } while (TurnP1 > 9)
    }

    //Adição do valor 0 ao array validation apenas na primeira jogada, onde o Jogador 1 possui todas as opções.
    if (contValidation == 0){
        validation.push (contValidation)
        contValidation ++
    }

    //Verificação da escolha do Jogador 1 e 2
    if (TurnP1 == validation [0] || TurnP1 == validation [1] || TurnP1 == validation [2] || TurnP1 == validation [3] || TurnP1 == validation [4] || TurnP1 == validation [5] || TurnP1 == validation [6] ||  TurnP1 == validation [7] || TurnP1 == validation [8] || TurnP1 == validation [9]){
        
        //Laço para escolha caso já tenha sido escolhida.
        do {
            TurnP1 = prompt ("Opção já escolhida. Insira outra posição.\n\n" +
            "                                               "+game[[1,1]]+"  |  "+game[[1,2]]+"  |  "+game[[1,3]]+"  " +
            "\n                                             _____________" +
            "\n                                               "+game[[2,1]]+"  |  "+game[[2,2]]+"  |  "+game[[2,3]]+"  " +
            "\n                                             _____________" +
            "\n                                               "+game[[3,1]]+"  |  "+game[[3,2]]+"  |  "+game[[3,3]]+"  "+
            "\n\n")      
        } while ((TurnP1 == validation [0] || TurnP1 == validation [1] || TurnP1 == validation [2] || TurnP1 == validation [3] || TurnP1 == validation [4] || TurnP1 == validation [5] || TurnP1 == validation [6] ||  TurnP1 == validation [7] || TurnP1 == validation [8] || TurnP1 == validation [9]))
    }

    //Adição da escolha do Jogador 1 ao array para que o Jogador 2 não escolha a mesma posição.
    validation.push(TurnP1)

    //Atribuição do X ao array do jogo
    switch (TurnP1){
        case '1':
            game [[1,1]] = 'X'
            break
        case '2':
            game [[1,2]] = 'X'
            break
        case '3':
            game [[1,3]] = 'X'
            break
        case '4':
            game [[2,1]] = 'X'
            break
        case '5':
            game [[2,2]] = 'X'
            break            
        case '6':
            game [[2,3]] = 'X'
            break            
        case '7':
            game [[3,1]] = 'X'
            break            
        case '8':
            game [[3,2]] = 'X'
            break
        case '9':
            game [[3,3]] = 'X'
            break            
        default:
            alert ()
    }

    //Demonstração do jogo após a escolha realizada
    alert ("                        Com a sua escolha, este é o jogo atual:\n\n"+
    "                                               "+game[[1,1]]+"  |  "+game[[1,2]]+"  |  "+game[[1,3]]+"  " +
    "\n                                             _____________" +
    "\n                                               "+game[[2,1]]+"  |  "+game[[2,2]]+"  |  "+game[[2,3]]+"  " +
    "\n                                             _____________" +
    "\n                                               "+game[[3,1]]+"  |  "+game[[3,2]]+"  |  "+game[[3,3]]+"  " +
    "\n\n")
}

//Função do Jogador 2
function roundP2 (){
    let TurnP2 = prompt (
    "                                               "+game[[1,1]]+"  |  "+game[[1,2]]+"  |  "+game[[1,3]]+"  " +
    "\n                                             _____________" +
    "\n                                               "+game[[2,1]]+"  |  "+game[[2,2]]+"  |  "+game[[2,3]]+"  " +
    "\n                                             _____________" +
    "\n                                               "+game[[3,1]]+"  |  "+game[[3,2]]+"  |  "+game[[3,3]]+"  " +
    "\n\n" +
    p2Name + ", escreva o número da posição que você deseja preencher com o O.")

    if (TurnP2 > 9){
        do{
            TurnP2 = prompt ("Opção não reconhecida. Escreva o número da posição que você deseja preencher com o X.\n\n"+
                "                                               "+game[[1,1]]+"  |  "+game[[1,2]]+"  |  "+game[[1,3]]+"  " +
                "\n                                             _____________" +
                "\n                                               "+game[[2,1]]+"  |  "+game[[2,2]]+"  |  "+game[[2,3]]+"  " +
                "\n                                             _____________" +
                "\n                                               "+game[[3,1]]+"  |  "+game[[3,2]]+"  |  "+game[[3,3]]+"  " +
                "\n")
        } while (TurnP2 > 9)
    }
    
    if (TurnP2 == validation [0] || TurnP2 == validation [1] || TurnP2 == validation [2] || TurnP2 == validation [3] || TurnP2 == validation [4] || TurnP2 == validation [5] || TurnP2 == validation [6] ||  TurnP2 == validation [7] || TurnP2 == validation [8] || TurnP2 == validation [9]){
        do {
            TurnP2 = prompt ("Opção já escolhida. Insira outra posição.\n\n" +
            "                                               "+game[[1,1]]+"  |  "+game[[1,2]]+"  |  "+game[[1,3]]+"  " +
            "\n                                             _____________" +
            "\n                                               "+game[[2,1]]+"  |  "+game[[2,2]]+"  |  "+game[[2,3]]+"  " +
            "\n                                             _____________" +
            "\n                                               "+game[[3,1]]+"  |  "+game[[3,2]]+"  |  "+game[[3,3]]+"  "+
            "\n\n")      
        } while ((TurnP2 == validation [0] || TurnP2 == validation [1] || TurnP2 == validation [2] || TurnP2 == validation [3] || TurnP2 == validation [4] || TurnP2 == validation [5] || TurnP2 == validation [6] ||  TurnP2 == validation [7] || TurnP2 == validation [8] || TurnP2 == validation [9]))
    }

    validation.push(TurnP2)

    switch (TurnP2){
        case '1':
            game [[1,1]] = 'O'
            break
        case '2':
            game [[1,2]] = 'O'
            break
        case '3':
            game [[1,3]] = 'O'
            break
        case '4':
            game [[2,1]] = 'O'
            break
        case '5':
            game [[2,2]] = 'O'
            break            
        case '6':
            game [[2,3]] = 'O'
            break            
        case '7':
            game [[3,1]] = 'O'
            break            
        case '8':
            game [[3,2]] = 'O'
            break
        case '9':
            game [[3,3]] = 'O'
            break            
        default:
            alert ()
    }

    alert ("                        Com a sua escolha, este é o jogo atual:\n\n"+
    "                                               "+game[[1,1]]+"  |  "+game[[1,2]]+"  |  "+game[[1,3]]+"  " +
    "\n                                             _____________" +
    "\n                                               "+game[[2,1]]+"  |  "+game[[2,2]]+"  |  "+game[[2,3]]+"  " +
    "\n                                             _____________" +
    "\n                                               "+game[[3,1]]+"  |  "+game[[3,2]]+"  |  "+game[[3,3]]+"  " )
}

//Este é o meu jogo da velha!

//Array do jogo, contendo toda a matriz 3x3
let game = [[1,1],[2,1],[3,1],[1,2],[2,2],[3,2],[1,3],[2,3],[3,3]]

//Array de validação, para não repetir ou sobrepor posições
let validation = new Array ()

//Variável para a primeira jogada
let contValidation = 0

//Variável que define a VELHA
let draw = 0

//Variável que incrementa a cada rodada
let cont = 1

//Indicando as posições do jogo
game [[1,1]] = "1"
game [[1,2]] = "2"
game [[1,3]] = "3"
game [[2,1]] = "4"
game [[2,2]] = "5"
game [[2,3]] = "6"
game [[3,1]] = "7"
game [[3,2]] = "8"
game [[3,3]] = "9"

//Inicio do jogo
alert ("Bem vindo ao JOGO DA VELHA!")
let p1Name = prompt ("Insira o nome do jogador 1.")
let p2Name = prompt ("Insira o nome do jogador 2.")

alert (p1Name + ", você ficou com o X.\n" +
"\n" + p2Name + ", você ficou com o O.")

alert ("Que comece o jogo!")

//Laço que garante a continuação do jogo, perceba que se a variável draw for diferente de 0, ele acaba automaticamente o laço.
for (;cont<=12 & draw == 0;){

        //Jogador 1 em primeiro, repetindo o laço apenas com a variável draw igualando a 0
        if (draw == 0){
            roundP1()

        //Condição de vitória para o Jogador 1, onde cont irá receber 13 para acabar o laço e por fim o algoritmo.
        if ((((game[[1,1]]=="X") & (game[[1,2]]=="X") & (game[[1,3]]=="X")) || ((game[[2,1]]=="X") & (game[[2,2]]=="X") & (game[[2,3]]=="X")) || ((game[[3,1]]=="X") & (game[[3,2]]=="X") & (game[[3,3]]=="X")) || ((game[[1,1]]=="X") & (game[[2,1]]=="X") & (game[[3,1]]=="X")) || ((game[[1,2]]=="X") & (game[[2,2]]=="X") & (game[[3,2]]=="X")) || ((game[[1,3]]=="X") & (game[[2,3]]=="X") & (game[[3,3]]=="X")) || ((game[[1,1]]=="X") & (game[[2,2]]=="X") & (game[[3,3]]=="X")) || ((game[[1,3]]=="X") & (game[[2,2]]=="X") & (game[[3,1]]=="X")))){
            alert ("Parabéns, " + p1Name + "! Você ganhou o JOGO DA VELHA!")
            cont = 13
        
        //Condição da velha após a condição de vitória, onde draw recebe 1, garantindo o fim do laço e do algoritmo.
        } else if ((((game [[1,1]] != "1") & (game [[1,2]] != "2")&(game [[1,3]] != "3")&(game [[2,1]] != "4")&(game [[2,2]] != "5")&(game [[2,3]] != "6")&(game [[3,1]] != "7")&(game [[3,2]] != "8")&(game [[3,3]] != "9")))){
            alert ("Deu velha!")
            draw = 1
        } 
        
        //Mesma estrutura do jogador 1 para o jogador 2, adicionando o cont como condição caso o Jogador 1 ganhe
        if (draw == 0 & cont <13){
        roundP2()
        if ((((game [[1,1]] != "1") & (game [[1,2]] != "2")&(game [[1,3]] != "3")&(game [[2,1]] != "4")&(game [[2,2]] != "5")&(game [[2,3]] != "6")&(game [[3,1]] != "7")&(game [[3,2]] != "8")&(game [[3,3]] != "9")))){
            alert ("Deu velha!")
            draw = 1
        } else if (((game[[1,1]]=="O") & (game[[1,2]]=="O") & (game[[1,3]]=="O")) || ((game[[2,1]]=="O") & (game[[2,2]]=="O") & (game[[2,3]]=="O")) || ((game[[3,1]]=="O") & (game[[3,2]]=="O") & (game[[3,3]]=="O")) || ((game[[1,1]]=="O") & (game[[2,1]]=="O") & (game[[3,1]]=="O")) || ((game[[1,2]]=="O") & (game[[2,2]]=="O") & (game[[3,2]]=="O")) || ((game[[1,3]]=="O") & (game[[2,3]]=="O") & (game[[3,3]]=="O")) || ((game[[1,1]]=="O") & (game[[2,2]]=="O") & (game[[3,3]]=="O")) || ((game[[1,3]]=="O") & (game[[2,2]]=="O") & (game[[3,1]]=="O"))){
            alert ("Parabéns, " + p2Name + "! Você ganhou o JOGO DA VELHA!")
            cont = 13
            }
        }
    }
}