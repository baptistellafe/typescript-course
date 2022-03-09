// string
let nome: string = 'João'
console.log(nome)

// numbers
let idade: number = 27.5
console.log(idade)

// boolean
let possuiHobbies: boolean = true
console.log(possuiHobbies)

// tipos explicitos
let minhaIdade: number;
minhaIdade = 27
console.log(typeof minhaIdade)

// array
let hobbies: string[] = ['cozinhar', 'lavar', 'passar roupa'];
console.log(typeof hobbies);

// tupla
let enderecoPrincipal: [string, number] = ['Rua Pedro Américo', 146]
console.log(enderecoPrincipal)

// enums
enum Cor {
  Cinza, // 0
  Verde, // 1
  Azul, // 2
  Amarelo = 'Amarelo',
  Branco = 2,
  Preto = 0
}

let minhaCorPreferida: Cor = Cor.Verde
console.log(minhaCorPreferida)
console.log(Cor.Verde, Cor.Cinza)


// any
let carro: any = 'bmw'
console.log(carro)
carro = { marca: 'bmw', ano: 2019, cor: Cor.Amarelo}
console.log(carro)

// funcoes
function retornaMeuNome(): string {
  return nome
}

console.log('função: ' + retornaMeuNome());

function digaOi(): void {
  console.log('Oi');
}

digaOi()

function multiplicar(numA: number, numB: number): number {
 return numA * numB
}

multiplicar(10, 10);
console.log(multiplicar(10, 10))

let calculo: (numA: number, numB: number) => number;
calculo = multiplicar
calculo(20, 20);
console.log(calculo(20, 20))

// objeto
let usuario: { nome: string, idade: number } = {
  nome: 'João',
  idade: 27
}

console.log(usuario)

type Funcionario = {
  supervisores: string[],
  baterPonto: (horas: number) => string
}

// desafio
let funcionario: Funcionario = {
  supervisores: [
    'Felipe', 'Henrique'
  ],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Horário normal'
    } else {
      return 'Fora do horário'
    }
  }
}

console.log(funcionario)
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));

let nota: number | string = 10
console.log(nota);

// checando tipos com js manualmente (somente curiosidade)
let valor = 30;

if (typeof valor === "number") {
  console.log('number')
}

// tipo never (looping ou erro), usamos quando a função não tem um retorno ou um fim
function falha(msg: string): never {
  throw new Error(msg)
}

const produto = {
  nome: 'Sabão',
  preco: 5,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
      falha('Precisa ter um nome')
    }

    if (this.preco <= 0) {
      falha('Precisa ter um preco')
    }
  }
}

produto.validarProduto()


// typescript bloquea o null para tipo number p causa do ts config
let altura = 12
//altura = null

// criar um variável com union types para aceitar valor null
let alturaOpcional: null | number = null
console.log(alturaOpcional);

type Contato = {
  nome: string,
  tel1: string,
  tel2: string | null
}

const contato1: Contato = {
  nome: 'Felipe',
  tel1: '139970000',
  tel2: null
}

console.log(contato1)

// tipo null (que não faz sentido ser usado)
let teste: null = null;

// mas caso seja usado o valor null, é inferido o tipo any (pode ser atríbuido boolean, string e number)
let type = null;
type = 10;
type = 'Premium'