import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosCadastroComponent } from './pages/produtos-cadastro/produtos-cadastro.component';
import { FornecedoresCadastroComponent } from './pages/fornecedores-cadastro/fornecedores-cadastro.component';
import { NavComponent } from './componentes/nav/nav.component';

const routes: Routes = [
  { path: '', redirectTo: 'consulta', pathMatch: 'full'},
  { path: 'consulta', component: NavComponent},
  { path: 'cadastro/produto', component: ProdutosCadastroComponent},
  { path: 'cadastro/fornecedor', component: FornecedoresCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
