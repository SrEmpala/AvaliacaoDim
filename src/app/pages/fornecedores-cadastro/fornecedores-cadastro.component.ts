import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { fornecedores } from 'src/app/fornecedores';
import { FornecedoresService } from 'src/app/fornecedores.service';

@Component({
  selector: 'app-fornecedores-cadastro',
  templateUrl: './fornecedores-cadastro.component.html',
  styleUrls: ['./fornecedores-cadastro.component.scss'],
})
export class FornecedoresCadastroComponent implements OnInit {
  fornecedorCadastro: any;
  erro?: string = '';
  id: number = 0;
  tituloFormulario: string = 'Cadastro';
  tituloBotao = 'Adicionar';

  constructor(
    private fornecedorService: FornecedoresService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id > 0) {
      this.CarregarFornecedorEdicao();
    }

    console.log(
      '🚀 ~ file: fornecedores-cadastro.component.ts:23 ~ FornecedoresCadastroComponent ~ ngOnInit ~ this.id:',
      this.id
    );

    this.fornecedorCadastro = new FormGroup({
      Id: new FormControl(0),
      Nome: new FormControl(null, [Validators.required]),
      NomeFantasia: new FormControl(null, [Validators.required]),
      CEP: new FormControl(null, [Validators.required]),
      Email: new FormControl(null, [Validators.required]),
      Telefone: new FormControl(null, [Validators.required]),
      CelularWpp: new FormControl(null, [Validators.required]),
      Observacoes: new FormControl(null, [Validators.required]),
      CPF: new FormControl(null, [Validators.required]),
    });
  }

  Adicionar() {
    if (this.fornecedorCadastro.valid) {
      const fornecedor: fornecedores = this.fornecedorCadastro.value;

      if (this.id > 0) {
        this.fornecedorService.EditarFornecedor(fornecedor).subscribe((res) => {
          this.router.navigate(['/consulta']);
        });
      } else {
        this.fornecedorService.SalvarFornecedor(fornecedor).subscribe((res) => {
          this.router.navigate(['/consulta']);
        });
      }
    } else {
      this.erro = 'Preencha todos os campos';
    }
  }

  CarregarFornecedorEdicao() {
    this.fornecedorService.BuscarId(this.id ?? 0).subscribe((res: any) => {
      this.tituloFormulario = 'Edição';
      this.tituloBotao = 'Editar';
      console.log(res);
      this.fornecedorCadastro.get('Id').setValue(res.id);
      this.fornecedorCadastro.get('Nome').setValue(res.nome);
      this.fornecedorCadastro.get('NomeFantasia').setValue(res.nomeFantasia);
      this.fornecedorCadastro.get('CEP').setValue(res.cep);
      this.fornecedorCadastro.get('Email').setValue(res.email);
      this.fornecedorCadastro.get('Telefone').setValue(res.telefone);
      this.fornecedorCadastro.get('CelularWpp').setValue(res.celularWpp);
      this.fornecedorCadastro.get('Observacoes').setValue(res.observacoes);
      this.fornecedorCadastro.get('CPF').setValue(res.cpf);
    });
  }
}
