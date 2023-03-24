const alunos = [''];

alunos.push ( {
    nome: 'Marina',
    Curso: 'FullStack',
    nota: '9'
})

alunos.push ( {
    nome: 'Bruno',
    Curso: 'FullStack',
    nota: '4'
})

alunos.push ( {
    nome: 'Wesley',
    Curso: 'BackEnd',
    nota: '6'
})

alunos.push ( {
    nome: 'Paula',
    Curso: 'FrontEnd',
    nota: '2'
})

console.log(alunos);


const filtraAlunosAprovados = alunos.filter(function(item) {
    return item.nota >= 6;
})

console.log(filtraAlunosAprovados);



