class Veiculo {

    constructor(modeloDoVeiculo, marcaDoVeiculo) {
        this.modelo = modeloDoVeiculo;
        this.marca= marcaDoVeiculo;
    }
  
    acelerar(vrooom) {
        console.log(`${this.modelo} acelerou e ${vrooom}`)
    }
  }
  
  class Carro extends Veiculo {
  
  }
  
  const CarroDaJulia = new Carro('Lancer', 'Mitsubishi');
  const CarroDoPedro = new Carro('Audi A3', 'Audi');
  const CarroDaMaria = new Carro('Camaro', 'Chevrolet');
  
  console.log(CarroDaJulia);
  console.log(CarroDoPedro);
  console.log(CarroDaMaria);
  
  class Moto extends Veiculo {
  
  }
  
  const MotoDaPatricia = new Moto('XRE 300', 'Honda');
  const MotoDoJoão = new Moto('CB 1000', 'Honda');
  const MotoDaLuana = new Moto('GS 750', 'BMW');
  
  console.log(MotoDaPatricia);
  console.log(MotoDoJoão);
  console.log(MotoDaLuana);
  
  
  