let nota;
let soma = 0;
for(let i = 1; i < 3; i++) {
    nota=Number(input.question(`informe a nota ${i} do aluno: `))

    soma = soma + nota 
}

console.log(soma)