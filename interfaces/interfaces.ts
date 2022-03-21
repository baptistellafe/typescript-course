
interface Humano {
  nome: string,
  idade?: number,
  [prop: string]: any
}

function saudarComOla(pessoa: Humano) {
  console.log('olá ' + pessoa.nome);
  
}

const pessoa = {
  nome: 'felipe',
  idade: 28
}

saudarComOla(pessoa)
saudarComOla({nome: 'Renata', idade: 35, altura: 1.75})
