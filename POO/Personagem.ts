export default class Personagem {
    constructor(
        // privado é visível apenas para a classe
        private _nome: string,
        private _energia: number,
        private _vida: number,
        private _ataque: number,
        private _defesa: number
    ) {}

    // toda vez que quiser ler dados na classe - usar parametro
    // toda vez que quiser imprimir dados na clase - usar retorno

    //get acessa uma outra propriedade com mesmo tipo
    //nesse caso nome
    public get nome():string{
        return this._nome;
    }

    //set provém modificação a atributos privados
    //recebe por parametro os dados a serem modificados
    //sempre retorna void
    public set nome(nome:string){
        this._nome = nome;
    }

    public showStatus(): string{
       return("Nome: " + this.nome +
        "Ataque: " + this._ataque +
        "Defesa: " + this._defesa +
        "Vida: " + this._vida +
        "Energia: " + this._energia
    )};

    public trainAttack():void{
        this._ataque += Math.floor(Math.random() * 3);
        this._energia -= Math.floor(Math.random() * 10);
        if(this._energia <= 0){
            console.log("Ops, você morreu!");
        }else if (this._ataque >= 100){
            console.log("Seu ataque está no máximo");
            this._ataque = 100;
        }
    }

    public trainDeffence():void{
        this._defesa += this.randomize(3);
        this._energia -= this.randomize(10);
        this.isAlive();
        if (this._defesa >= 100){
            console.log("Seu ataque está no máximo");
            this._defesa = 100;
        }
    }

    public rest(horas:number):number{
        if(horas >= 2 ){
            this._energia += 10;
        }else if(horas >= 10 ){
            this._energia += 25;
        }else if( horas >= 20 ){
            this._energia += 50;
        }
        return this._energia;
    }

    public battle(): number{
        let lifeLost = this.randomize(100); 
        this._vida -= lifeLost;
        return lifeLost;
    }

    public isAlive():boolean{
        if(this._energia <= 0 || this._vida <= 0){
            console.log("Ops, você morreu!");
            return false;
        }else{
            return true;
        }
    }
    
    public isMaxed():void{
        if(this._ataque || this._defesa >= 100){
            console.log("Status maximizado");
        }
    }
    // privado é visível apenas para a classe
    private randomize(fator:number):number{
        return Math.floor(Math.random()) * fator;
    }
}




