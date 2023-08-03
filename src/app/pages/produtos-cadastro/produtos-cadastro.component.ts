import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { produtos } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.scss']
})
export class ProdutosCadastroComponent implements OnInit {

  cadastrarProdutos: any;
  erro?: string = '';
  tituloFormulario: string = 'Cadastro';
  tituloBotao = 'Adicionar';
  id: number = 0;


  constructor(private produtosService: ProdutosService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    console.log("🚀 ~ file: produtos-cadastro.component.ts:26 ~ ProdutosCadastroComponent ~ ngOnInit ~ this.id:", this.id)
    if (this.id > 0) {
      this.CarregarProdutosEdicao();
    }

    this.cadastrarProdutos = new FormGroup({
      Id: new FormControl (0),
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

    if(this.cadastrarProdutos?.valid){
      const produto : produtos = this.cadastrarProdutos.value;

      if(this.id > 0){
        this.produtosService.EditarProduto(produto).subscribe(res => {
          this.router.navigate(['/consulta']);
        })}
        else{
        this.produtosService.SalvarProduto(produto).subscribe(res => {
          console.log(res);
          this.router.navigate(['/consulta']);
        });
      }
    } else
      this.erro = 'Preencha todos os campos';
  }

  CarregarProdutosEdicao(){
    this.produtosService.BuscarId(this.id ?? 0).subscribe((res : any) => {
      this.tituloFormulario = 'Edição';
      this.tituloBotao = 'Editar';

      this.cadastrarProdutos.get('Id').setValue(res.id);
      this.cadastrarProdutos.get('Nome').setValue(res.nome);
      this.cadastrarProdutos.get('Referencia').setValue(res.referencia);
      this.cadastrarProdutos.get('FornecedorId').setValue(res.fornecedorId);
      this.cadastrarProdutos.get('TipoItem').setValue(res.tipoItem);
      this.cadastrarProdutos.get('CustoCompra').setValue(res.custoCompra);
      this.cadastrarProdutos.get('PrecoSaida').setValue(res.precoSaida);
      this.cadastrarProdutos.get('Descricao').setValue(res.descricao);
      this.cadastrarProdutos.get('PesoLiquido').setValue(res.pesoLiquido);
      this.cadastrarProdutos.get('PesoBruto').setValue(res.pesoBruto);
    })
  }
}
