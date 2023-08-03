import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { produtos } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.scss']
})
export class ProdutosCadastroComponent implements OnInit {

  cadastrarProdutos: any;


  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {


    this.cadastrarProdutos = new FormGroup({
      Id: new FormControl (null),
      Nome: new FormControl (null, [Validators.required]),
      Referencia: new FormControl (null, [Validators.required]),
      FornecedorId: new FormControl (null, [Validators.required]),
      TipoItem: new FormControl ('P', [Validators.required]),
      CustoCompra: new FormControl(null, [Validators.required]),
      PrecoSaida: new FormControl(null, [Validators.required]),
      Descricao: new FormControl(null, [Validators.required]),
      PesoLiquido: new FormControl(null, [Validators.required]),
      PesoBruto: new FormControl(null, [Validators.required])
    });
  }

  Adicionar(){
    const produto : produtos = this.cadastrarProdutos.value;

    this.produtosService.SalvarProduto(produto).subscribe;
  }
}
