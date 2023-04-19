//classes
/**
 * data modifiers
 * public
 * private
 * protected
 */
class Character{
    protected name?: string; // ? faz com que a variavel não precise de valor inicial
    readonly strength: number;
    private skill: number;

    constructor(name: string, strength: number, skill: number ) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.strength} points`);   
    }
}

// Character: superclass
// Magician: subclass
class Magician extends Character {
    magicPoints?: number;
    constructor(name: string, strength: number, skill: number, magicPoints: number) {
        super(name, strength, skill); // super() sempre fica em primeiro no constructor
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character('Ryu',10, 98);
p1.attack();

const p2 = new Magician('Mago', 09, 30, 100);