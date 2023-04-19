"use strict";
const concatArray = (...itens) => {
    return new Array().concat(...itens);
};
const numArray = concatArray([1, 5], [3]);
const strArray = concatArray(['calebe', 'almeida'], ['melo']);
// numArray.push('Cas') não funciona mais, dps do generics
console.log(numArray);
console.log(strArray);
