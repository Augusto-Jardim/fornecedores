import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';

const routes: Routes = [
  { path: 'fornecedores', component: FornecedoresComponent },
  { path: '', redirectTo: '/fornecedores', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
