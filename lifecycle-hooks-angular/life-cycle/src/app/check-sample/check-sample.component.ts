import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css'],
})
export class CheckSampleComponent
  implements
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{

  quantidade:number = 0;

  constructor() {}

  add = ():void => {
    this.quantidade += 1;
  }

  descres = ():void => {
    this.quantidade -= 1;
  }
  
  // ckecked -> content -> view

  ngDoCheck(): void {
    console.log(`ngDoCheck`);
  }
  // depois da alteração, verifica o conteudo
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  //Quando o primeiro conteúdo é iniciado
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  // depois da alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  // depois da inicialização da view
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit.');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnDestroy(): void {
    console.log(`Goodbye my friend`);
  }
}
