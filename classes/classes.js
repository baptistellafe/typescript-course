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
//# sourceMappingURL=classes.js.map