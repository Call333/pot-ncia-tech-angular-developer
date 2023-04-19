//decorators

const exibirNome = (target: any) => {
    console.log(target);
}

@exibirNome
class Funcionario {

}

@exibirNome
class Quincas {

}


/**
 * class decorators
 * rodar com: npm run start:dev
 */

const apiVersion = (version: string) => {
    return (target: any ) => {
        Object.assign(target.prototype, { __version: version, __name: 'Clark'})
    }
}

const minLength = (length: number) => {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => "[play] " + _value
        const setter = (value: string) => {
            if(value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`)
            } else {
                _value = value;
            }
        } 

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        })
    } 
}

@apiVersion('1.10')
class Api {
    @minLength(8)
    name: string;

    constructor(name: string ){
        this.name = name;
    }
}

const api = new Api('produtos');
console.log(api.name);
console.log(api.__name);
console.log(api.__version);
