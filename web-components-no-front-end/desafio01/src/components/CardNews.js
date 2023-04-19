class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = 'By ' + (this.getAttribute('autor') || 'Anonymous')

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute('titulo');
        linkTitle.href = this.getAttribute('link-url');

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute('content')

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement('img');
        newsImage.src = (this.getAttribute('source-image') || './assets/img/default-pfp-1.jpg');
        newsImage.alt = this.getAttribute('alt-image');
z

        cardRight.appendChild(newsImage);
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement('style');
        style.textContent = `
            .card {
                width: 720px;
                height: 200px;
                display: flex;
                flex-direction: row;
                box-shadow: 10px 10px 7px -4px rgba(0,0,0,0.28);
            }
        
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 15px;
            }
            
            .card__left span {
                font-weight: 450;
            }
        
            .card__left a {
                text-decoration: none;
                color: black;
                font-size: 25px;
                font-weight: bold;
                margin-top: 15px;
                margin-bottom: 0;
            }
        
            .card__left p {
                color: #4F4557;
                margin: 0;
            }
        
            .card__right img {
                width: 300px;
                height: 200px;
            }
        `

        return style
    }
}

customElements.define('card-news', Cardnews)
