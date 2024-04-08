class Carro{
    constructor(marca, modelo, cor){
        this.marca;
        this.modelo;
        this.cor = cor;
    }
}
//criando uma instancia de  Carro 
let meuCarro = new Carro ("Toyota", "Corolla","Prata",);
console.log("Marca do carro:", meuCarro.marca);
console.log("Marca do carro:", meuCarro.modelo);
console.log("Marca do carro", meuCarro.cor);