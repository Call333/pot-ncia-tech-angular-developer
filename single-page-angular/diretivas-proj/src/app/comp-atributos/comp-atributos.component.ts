import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent {
  estilo:string = 'disable';
  corFundo:string = 'blue';
  corDaFont:string = 'yellow';
  item:string = ''
  lista:string[] = []
  isEnableBlock:boolean = true

  trocar = () => {
    if(this.estilo === 'disable'){
      this.estilo = 'enable'
    } else {
      this.estilo = 'disable'
    }
  }

  trocarCor = () => {
    if(this.corDaFont === 'yellow' && this.corFundo === 'blue'){
      this.corFundo = 'red'
      this.corDaFont = 'gray'
    } else {
      this.corFundo = 'blue';
      this.corDaFont = 'yellow';
    }
  }

  addLista = () => {
    this.lista.push(this.item)
  }
}
