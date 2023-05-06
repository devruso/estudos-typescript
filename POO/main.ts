import Personagem from "./Personagem";
import prompt from "prompt-sync";

let person: Personagem;
person = new Personagem("Daenerys Targaryen", 100,50,20,20);

let jon: Personagem = new Personagem("Jon Snow",100,50,50,30);

let teclado = prompt();

let option:number = 0;

while(option != 9 || person.isAlive() != false){
    console.log("|---------------------------------------|")
    console.log("|----------- Personagem ----------------|");
    console.log("|-----------1. Treinar ataque ----------|");
    console.log("|---------- 2. Treinar defesa ----------|");
    console.log("|---------- 3. Descansar  --------------|");
    console.log("|---------- 4. Entrar em batalha--------|");
    console.log("|---------- 8. Imprimir status ---------|");
    console.log("|------------9. Sair -------------------|");
    console.log("|---------------------------------------|");

    option = +teclado("Escolha uma ação");

    switch(option){
        case 1:
            person.trainAttack();

        break;
        case 2:
            person.trainDeffence();
        case 3:
            let horasDescansadas:number = +teclado("Digite o numero de horas");
            person.rest(horasDescansadas);
            console.log(person.showStatus)
        break;
        case 4:
           console.log(`Essa batalha custou: ${+person.battle()} de energia`);
        break;
        case 8:
            person.showStatus();
        break;
        
        default:
            break;
    
    }
}