class Heroi{
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }
    escrever(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}!`)
    }
}

let atacar = new Heroi("Mestre dos Magos", 65, "mago", "magia"); 

atacar.escrever();
