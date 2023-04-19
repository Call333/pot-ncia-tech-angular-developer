// typar variavel
type robot = {
    readonly id: number;
    name: string;
}
// trabalhar com classe
interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot: robot = {
    id: 1,
    name: 'robo do filme do will smith'
}

const bot1: robot2 = {
    id: 1,
    name: 'robo do filme do will smith',
    sayHello: function (): string {
        return 'hello';
    }
}

class pessoa implements robot2 {
    id: number | string;
    name: string;

    constructor(id: number | string, name: string){
        this.id = id;
        this.name = name;
    }   
    sayHello(): string {
        return `Hello, i am ${this.name}`;
    }

}

const p = new pessoa(1, 'eu robo');
console.log(p.sayHello());
