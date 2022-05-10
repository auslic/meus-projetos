Algoritmo "JOGO_dA_VELHA"

Var
   jogodemo : vetor [1..3,1..3] de inteiro
   jogoreal : vetor [1..3,1..3] de caracter
   validacao : vetor [0..1000] de inteiro
   i, j, k, l, m : inteiro
   nome_p1, nome_p2 : caracter
   resposta_p1, resposta_p2 : inteiro
   vitoria : inteiro

Inicio
   escreval("Jogo da Velha")
   escreval("_____________________")
   escreval("")

   k<-1
   para i de 1 ate 3 faca
      para j de 1 ate 3 faca
         jogodemo [i,j] <- k
         k <- k+1
      fimpara
   fimpara

   jogoreal [1,1] <- "1"
   jogoreal [1,2] <- "2"
   jogoreal [1,3] <- "3"
   jogoreal [2,1] <- "4"
   jogoreal [2,2] <- "5"
   jogoreal [2,3] <- "6"
   jogoreal [3,1] <- "7"
   jogoreal [3,2] <- "8"
   jogoreal [3,3] <- "9"

   escreval("Bem vindo ao jogo da velha!")
   escreva("Digite o nome do jogador 1: ")
   leia(nome_p1)
   escreva("Digite o nome do jogador 2: ")
   leia(nome_p2)
   escreval("O(A) ",nome_p1," ficou com o X, já o(a) ",nome_p2," ficou com O!")
   escreval("_____________________")
   escreval("QUE COMECE O JOGO!")

   l <- 1
   m <- 0
   validacao[0] <- 0

   repita
      escreval("_____________________")
      escreval ("RODADA ",l)

      //JOGADOR 1
      
      escreval("")
      escreval("   a     b     c  ")
      escreval("      |     |     ")
      escreval("1  ",jogoreal[1,1],"  |  ",jogoreal[1,2],"  |  ",jogoreal[1,3],"  ")
      escreval(" _____|_____|_____")
      escreval("      |     |     ")
      escreval("2  ",jogoreal[2,1],"  |  ",jogoreal[2,2],"  |  ",jogoreal[2,3],"  ")
      escreval(" _____|_____|_____")
      escreval("      |     |     ")
      escreval("3  ",jogoreal[3,1],"  |  ",jogoreal[3,2],"  |  ",jogoreal[3,3],"  ")
      escreval("      |     |     ")
      escreval("")
      
      escreva(nome_p1,", digite onde você irá inserir o seu X: ")
      leia(resposta_p1)
      
      repita
         se ((resposta_p1=validacao[1])ou(resposta_p1=validacao[2])ou(resposta_p1=validacao[3])ou(resposta_p1=validacao[4])ou(resposta_p1=validacao[5])ou(resposta_p1=validacao[6])ou(resposta_p1=validacao[7])ou(resposta_p1=validacao[8])ou(resposta_p1=validacao[9]))entao
            escreval("Posição já escolhida, escolha outra: ")
            leia(resposta_p1)
         fimse
      ate resposta_p1<>validacao[1] e resposta_p1<>validacao[2] e resposta_p1<>validacao[3] e resposta_p1<>validacao[4] e resposta_p1<>validacao[5] e resposta_p1<>validacao[6] e resposta_p1<>validacao[7] e resposta_p1<>validacao[8] e resposta_p1<>validacao[9]

      validacao[m] <- resposta_p1
      m <- m+1

      escolha resposta_p1
      caso 1
         jogoreal [1,1] <- "X"
      caso 2
         jogoreal [1,2] <- "X"
      caso 3
         jogoreal [1,3] <- "X"
      caso 4
         jogoreal [2,1] <- "X"
      caso 5
         jogoreal [2,2] <- "X"
      caso 6
         jogoreal [2,3] <- "X"
      caso 7
         jogoreal [3,1] <- "X"
      caso 8
         jogoreal [3,2] <- "X"
      caso 9
         jogoreal [3,3] <- "X"
      outrocaso
         escreva ("Número não reconhecido, perdeu a vez!")
      fimescolha

      escreval("")
      escreval("   a     b     c  ")
      escreval("      |     |     ")
      escreval("1  ",jogoreal[1,1],"  |  ",jogoreal[1,2],"  |  ",jogoreal[1,3],"  ")
      escreval(" _____|_____|_____")
      escreval("      |     |     ")
      escreval("2  ",jogoreal[2,1],"  |  ",jogoreal[2,2],"  |  ",jogoreal[2,3],"  ")
      escreval(" _____|_____|_____")
      escreval("      |     |     ")
      escreval("3  ",jogoreal[3,1],"  |  ",jogoreal[3,2],"  |  ",jogoreal[3,3],"  ")
      escreval("      |     |     ")
      escreval("")
      
      se(((jogoreal[1,1]="X") e (jogoreal[1,2]="X") e (jogoreal[1,3]="X")) ou ((jogoreal[2,1]="X") e (jogoreal[2,2]="X") e (jogoreal[2,3]="X")) ou ((jogoreal[3,1]="X") e (jogoreal[3,2]="X") e (jogoreal[3,3]="X")) ou ((jogoreal[1,1]="X") e (jogoreal[2,1]="X") e (jogoreal[3,1]="X")) ou ((jogoreal[1,2]="X") e (jogoreal[2,2]="X") e (jogoreal[3,2]="X")) ou ((jogoreal[1,3]="X") e (jogoreal[2,3]="X") e (jogoreal[3,3]="X")) ou ((jogoreal[1,1]="X") e (jogoreal[2,2]="X") e (jogoreal[3,3]="X")) ou ((jogoreal[1,3]="X") e (jogoreal[2,2]="X") e (jogoreal[3,1]="X"))) entao
      escreval ("Parabéns, ",nome_p1,"! Você ganhou o JOGO DA VELHA!")
      vitoria <- 10
      senao
      se ((jogoreal [1,1] <> "1")e(jogoreal [1,2] <> "2")e(jogoreal [1,3] <> "3")e(jogoreal [2,1] <> "4")e(jogoreal [2,2] <> "5")e(jogoreal [2,3] <> "6")e(jogoreal [3,1] <> "7")e(jogoreal [3,2] <> "8")e(jogoreal [3,3] <> "9")e(vitoria<=9)) entao
	      escreval ("Deu velha!")
	      FimAlgoritmo
      fimse
      
      //JOGADOR 2

      escreva(nome_p2,", digite onde você irá inserir o seu O: ")
      leia(resposta_p2)

      repita
         se ((resposta_p2=validacao[1])ou(resposta_p2=validacao[2])ou(resposta_p2=validacao[3])ou(resposta_p2=validacao[4])ou(resposta_p2=validacao[5])ou(resposta_p2=validacao[6])ou(resposta_p2=validacao[7])ou(resposta_p2=validacao[8])ou(resposta_p2=validacao[9]))entao
            escreval("Posição já escolhida, escolha outra: ")
            leia(resposta_p2)
         fimse
      ate resposta_p2<>validacao[1] e resposta_p2<>validacao[2] e resposta_p2<>validacao[3] e resposta_p2<>validacao[4] e resposta_p2<>validacao[5] e resposta_p2<>validacao[6] e resposta_p2<>validacao[7] e resposta_p2<>validacao[8] e resposta_p2<>validacao[9]

      validacao[m] <- resposta_p2

      escolha resposta_p2
      caso 1
         jogoreal [1,1] <- "O"
      caso 2
         jogoreal [1,2] <- "O"
      caso 3
         jogoreal [1,3] <- "O"
      caso 4
         jogoreal [2,1] <- "O"
      caso 5
         jogoreal [2,2] <- "O"
      caso 6
         jogoreal [2,3] <- "O"
      caso 7
         jogoreal [3,1] <- "O"
      caso 8
         jogoreal [3,2] <- "O"
      caso 9
         jogoreal [3,3] <- "O"
      outrocaso
         escreva ("Número não reconhecido, perdeu a vez!")
      fimescolha

      escreval("")
      escreval("   a     b     c  ")
      escreval("      |     |     ")
      escreval("1  ",jogoreal[1,1],"  |  ",jogoreal[1,2],"  |  ",jogoreal[1,3],"  ")
      escreval(" _____|_____|_____")
      escreval("      |     |     ")
      escreval("2  ",jogoreal[2,1],"  |  ",jogoreal[2,2],"  |  ",jogoreal[2,3],"  ")
      escreval(" _____|_____|_____")
      escreval("      |     |     ")
      escreval("3  ",jogoreal[3,1],"  |  ",jogoreal[3,2],"  |  ",jogoreal[3,3],"  ")
      escreval("      |     |     ")
      escreval("")
      
      se (((jogoreal[1,1]="O") e (jogoreal[1,2]="O") e (jogoreal[1,3]="O")) ou ((jogoreal[2,1]="O") e (jogoreal[2,2]="O") e (jogoreal[2,3]="O")) ou ((jogoreal[3,1]="O") e (jogoreal[3,2]="O") e (jogoreal[3,3]="O")) ou ((jogoreal[1,1]="O") e (jogoreal[2,1]="O") e (jogoreal[3,1]="O")) ou ((jogoreal[1,2]="O") e (jogoreal[2,2]="O") e (jogoreal[3,2]="O")) ou ((jogoreal[1,3]="O") e (jogoreal[2,3]="O") e (jogoreal[3,3]="O")) ou ((jogoreal[1,1]="O") e (jogoreal[2,2]="O") e (jogoreal[3,3]="O")) ou ((jogoreal[1,3]="O") e (jogoreal[2,2]="O") e (jogoreal[3,1]="O"))) entao
         escreval ("Parabéns, ",nome_p2,"! Você ganhou o JOGO DA VELHA!")
         vitoria<-10
      fimse
      
      se ((jogoreal [1,1] <> "1")e(jogoreal [1,2] <> "2")e(jogoreal [1,3] <> "3")e(jogoreal [2,1] <> "4")e(jogoreal [2,2] <> "5")e(jogoreal [2,3] <> "6")e(jogoreal [3,1] <> "7")e(jogoreal [3,2] <> "8")e(jogoreal [3,3] <> "9")e(vitoria<=9)) entao
	      escreval ("Deu velha!")
	      FimAlgoritmo
      fimse
      
      fimse
      
      m <- m+1
      l <- l+1

  ate ((jogoreal[1,1]="X") e (jogoreal[1,2]="X") e (jogoreal[1,3]="X")) ou ((jogoreal[2,1]="X") e (jogoreal[2,2]="X") e (jogoreal[2,3]="X")) ou ((jogoreal[3,1]="X") e (jogoreal[3,2]="X") e (jogoreal[3,3]="X")) ou ((jogoreal[1,1]="O") e (jogoreal[1,2]="O") e (jogoreal[1,3]="O")) ou ((jogoreal[2,1]="O") e (jogoreal[2,2]="O") e (jogoreal[2,3]="O")) ou ((jogoreal[3,1]="O") e (jogoreal[3,2]="O") e (jogoreal[3,3]="O")) ou ((jogoreal[1,1]="X") e (jogoreal[2,1]="X") e (jogoreal[3,1]="X")) ou ((jogoreal[1,2]="X") e (jogoreal[2,2]="X") e (jogoreal[3,2]="X")) ou ((jogoreal[1,3]="X") e (jogoreal[2,3]="X") e (jogoreal[3,3]="X")) ou ((jogoreal[1,1]="O") e (jogoreal[2,1]="O") e (jogoreal[3,1]="O")) ou ((jogoreal[1,2]="O") e (jogoreal[2,2]="O") e (jogoreal[3,2]="O")) ou ((jogoreal[1,3]="O") e (jogoreal[2,3]="O") e (jogoreal[3,3]="O")) ou ((jogoreal[1,1]="X") e (jogoreal[2,2]="X") e (jogoreal[3,3]="X")) ou ((jogoreal[1,3]="X") e (jogoreal[2,2]="X") e (jogoreal[3,1]="X"))

Fimalgoritmo