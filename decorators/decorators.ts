@logarClasse

class Eletrodomestico {
  constructor() {
    console.log('..novo');
    
  }
}

console.log(typeof Eletrodomestico)

function logarClasse(constructor: Function) {
  console.log(constructor);
  
}