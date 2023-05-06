export default class Personagem {
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ) {}

    // toda vez que quiser ler dados na classe - usar parametro
    // toda vez que quiser imprimir dados na clase - usar retornoi
    showStatus(): string{
       return("Nome: " + this.nome +
        "Ataque: " + this.ataque +
        "Defesa: " + this.defesa +
        "Vida: " + this.vida +
        "Energia: " + this.energia
    )};
    trainAttack():void{
        this.ataque += Math.floor(Math.random() * 3);
        this.energia -= Math.floor(Math.random() * 10);
        if(this.energia <= 0){
            console.log("Ops, você morreu!");
        }else if (this.ataque >= 100){
            console.log("Seu ataque está no máximo");
            this.ataque = 100;
        }
    }

    trainDeffence():void{
        this.defesa += Math.floor(Math.random()) * 3;
        this.energia -= Math.floor(Math.random() * 10);
        this.isAlive();
        if (this.defesa >= 100){
            console.log("Seu ataque está no máximo");
            this.defesa = 100;
        }
    }

    rest(horas:number):number{
        if(horas >= 2 ){
            this.energia += 10;
        }else if(horas >= 10 ){
            this.energia += 25;
        }else if( horas >= 20 ){
            this.energia += 50;
        }
        return this.energia;
    }

    battle(): number{
        let lifeLost = Math.floor(Math.random() * 100); 
        this.vida -= Math.floor(Math.random() * 100);
        return lifeLost;
    }

    isAlive():boolean{
        if(this.energia <= 0 || this.vida <= 0){
            console.log("Ops, você morreu!");
            return false;
        }else{
            return true;
        }
    }
    
    isMaxed():void{
        if(this.ataque || this.defesa >= 100){
            console.log("Status maximizado");
        }
    }
}




