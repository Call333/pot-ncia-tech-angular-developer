
const concatArray = <T>(...itens: T[]): T[] => { // os ... indicam que podem entrar na função N parâmetros
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const strArray = concatArray<string[]>(['calebe', 'almeida'], ['melo'])

// numArray.push('Cas') não funciona mais, dps do generics
console.log(numArray);
console.log(strArray);
