import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosCadastroComponent } from './pages/produtos-cadastro/produtos-cadastro.component';
import { ProdutosConsultaComponent } from './pages/produtos-consulta/produtos-consulta.component';
import { FornecedoresConsultaComponent } from './pages/fornecedores-consulta/fornecedores-consulta.component';
import { FornecedoresCadastroComponent } from './pages/fornecedores-cadastro/fornecedores-cadastro.component';
import { NavComponent } from './componentes/nav/nav.component';
import { CardComponent } from './componentes/card/card.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { produtos } from './produtos';
import { HttpClientModule } from '@angular/common/http';
import { fornecedores } from './fornecedores';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosCadastroComponent,
    ProdutosConsultaComponent,
    FornecedoresConsultaComponent,
    FornecedoresCadastroComponent,
    NavComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
  providers: [HttpClientModule, produtos, fornecedores],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
