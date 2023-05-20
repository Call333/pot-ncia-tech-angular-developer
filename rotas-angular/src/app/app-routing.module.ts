import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  {
    path: '',
    component: TitleComponent,
    pathMatch: 'full' // URL Exata
  },
  {
    path: 'portifolio',
    component: CardComponent,
    children: [
      {
      path: ':id',
      component: CardComponent,
      pathMatch: 'prefix', // URL pode ter mais que isso, valor default
      },
      {
        path: ':id/:user',
        component: CardComponent,
        pathMatch: 'prefix', // URL pode ter mais que isso, valor default
        }
    ]
  },
  {
    path: '**', 
    redirectTo: ''
  }// Exemplo rota coringa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
