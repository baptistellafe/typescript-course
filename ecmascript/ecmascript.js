"use strict";
// let & const
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'colocar o casaco';
    console.log(acao);
}
const cpf = '123.456.789-99';
console.log(cpf);
const segredo = 'externo';
function revelar() {
    const segredo = 'interno';
}
console.log(segredo);
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
// arrow function
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
function subtrair(n1, n2) {
    return n1 - n2;
}
console.log(subtrair(2, 2));
const triplicar = (n1) => n1 * 3;
console.log(triplicar(10));
const saudacao = () => console.log('Olá');
saudacao();
const falarCom = (pessoa) => console.log('falar com ' + pessoa);
falarCom('Felipe');
// this
function normalComThis() {
    console.log(this);
}
const normalComThisEspecial = normalComThis.bind("abc");
normalComThisEspecial();
// parametro padrao
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log('acabou');
}
// spred e rest
const numbers = [1, 10, 99, -5];
console.log('máximo: ' + Math.max(...numbers));
const turmaA = ['ana', 'beto', 'a'];
const turmaB = ['joao', 'paulo', 'felipe', ...turmaA];
console.log(turmaB);
contagemRegressiva(5);
function retornaArray(...args) {
    return args;
}
const numeros = retornaArray(1, 2, 3, 4, 5, 6);
console.log(numeros);
const tupla = [4, 'agosto', 93];
function mostrarTupla(dia, mes, ano) {
    console.log(dia, mes, ano);
}
mostrarTupla(...tupla);
function mostrarTuplaInversa(...args) {
    console.log(args);
}
mostrarTuplaInversa(...tupla);
// destructuring array
const meuArray = ['lindo', 'magro', 'alto', 'inteligente'];
const melhorCaracteristica = meuArray[3];
console.log(melhorCaracteristica);
const [valor1, valor2, valor3, valor4] = meuArray;
console.log(valor2);
// destructuring objeto
const felipe = {
    olhos: 'castanhos',
    peso: 75,
    cabelo: 'preto'
};
const { olhos, peso } = felipe;
console.log(olhos, peso);
function esperar3s(callback) {
    setTimeout(() => {
        callback('3 segundos depois');
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
esperar3s();
function esperar3Promise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3 segundos depois');
        }, 3000);
    });
}
esperar3Promise()
    .then(dado => console.log('a função foi executada'));
fetch('https://swapi.dev/api/people/1')
    .then(resp => resp.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(respFilm => respFilm.json())
    .then(film => console.log(film.title))
    .catch(err => console.log('catch!!! ' + err));
//# sourceMappingURL=ecmascript.js.map