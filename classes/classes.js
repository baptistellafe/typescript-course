"use strict";
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(4, 8, 1993);
aniversario.ano = 8;
console.log(aniversario.ano);
console.log(aniversario);
class DataEsperta {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const natal = new Data(25, 12, 2022);
natal.ano = 2023;
console.log(natal.ano);
console.log(natal);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
}
const prod1 = new Produto('Caneta Bic Preta', 4.20);
console.log(prod1.resumo());
prod1.desconto = 0.20;
console.log(prod1.resumo());
console.log(prod1.precoComDesconto);
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const novoCarro = new Carro('bmw', 'z4', 300);
console.log(novoCarro.acelerar());
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
}
const f40 = new Ferrari('f40', 300);
console.log(f40);
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
let pessoa5 = new Pessoa;
pessoa5.idade = 10;
console.log(pessoa5);
// atributos e métdos estáticos
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.14;
console.log(Matematica.areaCirc(4));
class X {
    w(b) {
        console.log(b);
    }
}
// classe abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
let c1 = new Soma;
c1.executar(2, 2, 2, 2, 2);
console.log(c1.getResultado());
// somente leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
let aviao = new Aviao('Modelo do aviao', 'BR');
console.log(aviao);
//# sourceMappingURL=classes.js.map