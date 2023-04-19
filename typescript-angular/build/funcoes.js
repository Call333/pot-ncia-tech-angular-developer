"use strict";
/**
 * Com o TS você pode especificar os tipos de retorno de uma função, de forma implicita ou explicita:
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const addNumber = (x, y) => {
    return x + y;
};
const addToHello = (name) => {
    return `Hello ${name}`;
};
// também podemos usar o tipo : any, object
const CallToPhone = (phone) => {
    return phone;
};
/**
 * funções async precisam retornar uma Promise<>, seja de forma implicita ou explicita:
 */
const getDatabase = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return 'calebe';
});
let soma = addNumber(4, 5);
console.log(soma);
console.log(addToHello('Calebe'));
console.log(CallToPhone('66953781298'));
