const alunos = [
    {
        nome: 'Guilherme',
        nota: 10,
        turma: '3B',
    },
    {
        nome: 'Gabriel',
        nota: 7,
        turma: '3B',
    },
    {
        nome: 'Letícia',
        nota: 4,
        turma: '3B',
    },
]

function alunosAprovados (array, media) {
    
    let aprovados = [];
    
    for (let i = 0; i < array.length; i++){
        const {nota, nome} = array[i];
        
        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados
}

console.log(alunosAprovados(alunos, 5))