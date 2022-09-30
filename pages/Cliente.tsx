export default class Cliente{
    #id: Number;
    #nome: String;
    #idade: Number;

    constructor(id:Number,nome:String,idade:Number){
     this.#id=id
     this.#nome=nome
     this.#idade=idade


       
    
  
    }static vazio() {
        return new Cliente(1,"",26)
    }
    public get idade(): Number {
        return this.#idade;
        
    }
   
    public set idade(value: Number) {
        this.idade = value;
    }
    public get nome(): String {
        return this.#nome;
    }
    public set nome(value: String) {
        this.nome = value;
    }
    public get id(): Number {
        return this.#id;
    }
    public set id(value: Number) {
        this.id = value;
    }

}

