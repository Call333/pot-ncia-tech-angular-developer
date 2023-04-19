"use strict";
//classes
/**
 * data modifiers
 * public
 * private
 * protected
 */
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
// Character: superclass
// Magician: subclass
class Magician extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill); // super() sempre fica em primeiro no constructor
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character('Ryu', 10, 98);
p1.attack();
const p2 = new Magician('Mago', 09, 30, 100);
