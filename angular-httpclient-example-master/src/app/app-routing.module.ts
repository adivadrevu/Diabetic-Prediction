import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { diabeticsComponent } from './getDiabetics/diabetics.component';


const routes: Routes = [
  {
    path: 'diabetics',
    component: diabeticsComponent,
    data: { title: 'Product List' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
