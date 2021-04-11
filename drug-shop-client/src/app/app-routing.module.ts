import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import {DrugListComponent} from './drugs/drug-list/drug-list.component';

const routes: Routes = [
  {path: '', component: DrugListComponent},
  {path: 'cart', component: CartComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
