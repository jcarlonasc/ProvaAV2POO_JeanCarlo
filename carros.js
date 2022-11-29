class veiculo {
    constructor (rodas, combustivel) {
        this.rodas = rodas;
        this.combustivel = combustivel;
    }
    acelerar() {
        console.log("Acelerando...");
    }
}

class moto extends veiculo {
    constructor(rodas, combustivel, cilindrada) {
        super(rodas, combustivel);
        this.cilindrada = cilindrada;
    }
    acelerar(){
        super.acelerar();
        empinar();
    }
}

const honda = new moto(2, "Gasolina", 1600);
const BMW = new veiculo(4, "Gasolina");
console.log(honda);
console.log(BMW);
