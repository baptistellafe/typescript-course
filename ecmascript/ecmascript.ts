// let & const
let seraQuePode = '?'
console.log(seraQuePode)

let estaFrio = true

if (estaFrio) {
  let acao = 'colocar o casaco'
  console.log(acao)
}

const cpf: string = '123.456.789-99'
console.log(cpf)

const segredo = 'externo'
function revelar() {
  const segredo = 'interno'
}

console.log(segredo)

for (var i = 0; i < 10; i++) {
  console.log(i)
}

console.log(i)

// arrow function
const somar = function(n1: number, n2: number):number {
  return n1+n2
}

console.log(somar(2,2));

function subtrair(n1: number, n2: number):number {
  return n1 - n2;
}

console.log(subtrair(2,2));

const triplicar = (n1: number) => n1 * 3

console.log(triplicar(10));

const saudacao = () => console.log('Olá')
saudacao()

const falarCom = (pessoa: string) => console.log('falar com ' + pessoa)
falarCom('Felipe')

// this
function normalComThis() {
  console.log(this)
}

const normalComThisEspecial = normalComThis.bind("abc")

normalComThisEspecial()

// parametro padrao

function contagemRegressiva(
  inicio: number = 5,
  fim: number = inicio - 5
  ): void {
  console.log(inicio)

  while(inicio > 0) {
    inicio--
    console.log(inicio)
  }

  console.log('acabou')
}

// spred e rest
const numbers = [1, 10, 99, -5]
console.log('máximo: ' + Math.max(...numbers))

const turmaA: string[] = ['ana', 'beto', 'a']
const turmaB: string[] = ['joao', 'paulo', 'felipe', ...turmaA]
console.log(turmaB)


contagemRegressiva(5)

function retornaArray(...args: number[]): number[] {
  return args
}

const numeros = retornaArray(1,2,3,4,5,6)
console.log(numeros);


const tupla: [number, string, number] = [4, 'agosto', 93]

function mostrarTupla(dia: number, mes: string, ano: number) {
  console.log(dia, mes, ano)
}

mostrarTupla(...tupla)

function mostrarTuplaInversa(...args: [number, string, number]) {
  console.log(args)
}

mostrarTuplaInversa(...tupla);

// destructuring array
const meuArray = ['lindo', 'magro', 'alto', 'inteligente']
const melhorCaracteristica = meuArray[3]
console.log(melhorCaracteristica)

const [valor1, valor2, valor3, valor4] = meuArray

console.log(valor2)

// destructuring objeto
const felipe = {
  olhos: 'castanhos',
  peso: 75,
  cabelo: 'preto'
}

const { olhos, peso } = felipe
console.log(olhos, peso)


function esperar3Promise() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve('3 segundos depois')
    }, 3000);
  })
}

esperar3Promise()
  .then(dado => console.log('a função foi executada'))

  fetch('https://swapi.dev/api/people/1')
    .then(resp => resp.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(respFilm => respFilm.json())
    .then(film => console.log(film.title))
    .catch(err => console.log('catch!!! ' + err))

  