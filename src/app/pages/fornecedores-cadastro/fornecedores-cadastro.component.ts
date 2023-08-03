import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fornecedores } from 'src/app/fornecedores';
import { FornecedoresService } from 'src/app/fornecedores.service';

@Component({
  selector: 'app-fornecedores-cadastro',
  templateUrl: './fornecedores-cadastro.component.html',
  styleUrls: ['./fornecedores-cadastro.component.scss'],
})
export class FornecedoresCadastroComponent implements OnInit {
  fornecedorCadastro: any;

  constructor(private fornecedorService: FornecedoresService) {}

  ngOnInit(): void {

    this.fornecedorCadastro = new FormGroup({
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
    const fornecedor: fornecedores = this.fornecedorCadastro.value;

    this.fornecedorService.SalvarFornecedor(fornecedor).subscribe;
  }
}
