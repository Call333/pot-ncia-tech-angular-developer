import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  produtos:string[] = []
  menuType:string = ''
  constructor() {
    this.produtos = [
      'mouse', 'teclado', 'fonte', 'monitor'
    ]
  }
  
  add = () => {
    this.produtos.push('calebe');
  }

  remover = (index:number) => {
    this.produtos.splice(index, 1)
  }
}
