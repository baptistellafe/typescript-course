class Data {
  dia: number
  mes: number
  ano: number

  constructor(dia: number, mes: number, ano: number) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const aniversario = new Data(4, 8, 1993)
aniversario.ano = 8
console.log(aniversario.ano)

console.log(aniversario)

class DataEsperta {
  constructor(public dia: number, public mes: number, public ano: number) {
    
  }
}

const natal = new Data(25, 12, 2022)
natal.ano = 2023
console.log(natal.ano)
console.log(natal)

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) { }

  public precoComDesconto(): number {
    return this.preco * (1 - this.desconto)
  }

  public resumo(): string {
    return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`
  }
}

const prod1 = new Produto('Caneta Bic Preta', 4.20)
console.log(prod1.resumo())
prod1.desconto = 0.20
console.log(prod1.resumo())
console.log(prod1.precoComDesconto)

class Carro {
  private velocidadeAtual:  number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {

  }

  private alterarVelocidade(delta: number):number {
    const novaVelocidade = this.velocidadeAtual + delta
    const velocidadeValida = novaVelocidade >= 0
      && novaVelocidade <= this.velocidadeMaxima

    if(velocidadeValida) {
      this.velocidadeAtual = novaVelocidade
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
    }
    
    return this.velocidadeAtual
  }

  public acelerar(): number {
    return this.alterarVelocidade(5)
  }

  public frear(): number {
    return this.alterarVelocidade(-5)
  }
}

const novoCarro = new Carro('bmw', 'z4', 300)
console.log(novoCarro.acelerar())


class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima)
  }
}


const f40 = new Ferrari('f40', 300)
console.log(f40);
