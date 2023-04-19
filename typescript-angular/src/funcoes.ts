/**
 * Com o TS você pode especificar os tipos de retorno de uma função, de forma implicita ou explicita:
 */

const addNumber = (x: number, y: number): number => {
    return x + y;
}

const addToHello = (name: string) => {
    return `Hello ${name}`;
}
// também podemos usar o tipo : any, object
const CallToPhone = (phone: number | string): number | string => { 
    return phone;
}
/**
 * funções async precisam retornar uma Promise<>, seja de forma implicita ou explicita:
 */
const getDatabase = async (id: number) : Promise<string> => {
    return 'calebe';
}

let soma: number = addNumber(4, 5);

console.log(soma);

console.log(addToHello('Calebe'));

console.log(CallToPhone('66953781298'));


