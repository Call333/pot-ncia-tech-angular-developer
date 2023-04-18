class titulo extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});

        // base
        const componentRoot1 = document.createElement('h1');
        componentRoot1.textContent = this.getAttribute('titulo');
        // style
        const style = document.createElement('style');
        style.textContent = `
            h1 {
                color: red
            }
        `
        // passando o component pro index.html
        shadow.appendChild(componentRoot1)
        shadow.appendChild(style);
    }   
}

customElements.define('titulo-dinamico', titulo);