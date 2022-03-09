"use strict";
// string
let nome = 'João';
console.log(nome);
// numbers
let idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = true;
console.log(possuiHobbies);
// tipos explicitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// array
let hobbies = ['cozinhar', 'lavar', 'passar roupa'];
console.log(typeof hobbies);
// tupla
let enderecoPrincipal = ['Rua Pedro Américo', 146];
console.log(enderecoPrincipal);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor["Amarelo"] = "Amarelo";
    Cor[Cor["Branco"] = 2] = "Branco";
    Cor[Cor["Preto"] = 0] = "Preto";
})(Cor || (Cor = {}));
let minhaCorPreferida = Cor.Verde;
console.log(minhaCorPreferida);
console.log(Cor.Verde, Cor.Cinza);
// any
let carro = 'bmw';
console.log(carro);
carro = { marca: 'bmw', ano: 2019, cor: Cor.Amarelo };
console.log(carro);
// funcoes
function retornaMeuNome() {
    return nome;
}
console.log('função: ' + retornaMeuNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
multiplicar(10, 10);
console.log(multiplicar(10, 10));
let calculo;
calculo = multiplicar;
calculo(20, 20);
console.log(calculo(20, 20));
// objeto
let usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
// desafio
let funcionario = {
    supervisores: [
        'Felipe', 'Henrique'
    ],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Horário normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario);
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
let nota = 10;
console.log(nota);
// checando tipos com js manualmente (somente curiosidade)
let valor = 30;
if (typeof valor === "number") {
    console.log('number');
}
// tipo never (looping ou erro), usamos quando a função não tem um retorno ou um fim
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 5,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Precisa ter um preco');
        }
    }
};
produto.validarProduto();
// typescript bloquea o null para tipo number p causa do ts config
let altura = 12;
//altura = null
// criar um variável com union types para aceitar valor null
let alturaOpcional = null;
console.log(alturaOpcional);
const contato1 = {
    nome: 'Felipe',
    tel1: '139970000',
    tel2: null
};
console.log(contato1);
// tipo null (que não faz sentido ser usado)
let teste = null;
// mas caso seja usado o valor null, é inferido o tipo any (pode ser atríbuido boolean, string e number)
let type = null;
type = 10;
type = 'Premium';
