"use strict";
const bot = {
    id: 1,
    name: 'robo do filme do will smith'
};
const bot1 = {
    id: 1,
    name: 'robo do filme do will smith',
    sayHello: function () {
        return 'hello';
    }
};
class pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello, i am ${this.name}`;
    }
}
const p = new pessoa(1, 'eu robo');
console.log(p.sayHello());
