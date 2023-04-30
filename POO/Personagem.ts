//energia, vida, ataque, defesa e nome. Quem sabe um método de treinar ataque
import prompt from "prompt-sync";


//classe
class Personagem {
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ) {
        this.nome = nome;
        this.energia = 50;
        this.vida = 100;
    }
}


let daenerys: Personagem;
daenerys = new Personagem("Daenerys Targaryen", 100,50,20,20);

let jon: Personagem = new Personagem("Jon Snow",100,50,50,30);

let teclado = prompt();

let option:number = 0;
while(option != 9){
    console.log("|---------------------------------------|")
    console.log("|----------- Personagem ----------------|");
    console.log("|-----------1. Treinar ataque ----------|");
    console.log("|---------- 2. Treinar defesa ----------|");
    console.log("|---------- 3. Imprimir status ---------|");
    console.log("|------------9. Sair -------------------|");
    console.log("|---------------------------------------|");
}

option = +teclado("Escolha uma ação");

switch(option){
    case 1:
        daenerys.ataque += 2;
    break;
    case 2:
        daenerys.defesa += 2;
    case 3:
        console.log(daenerys);
    break;
    


}


