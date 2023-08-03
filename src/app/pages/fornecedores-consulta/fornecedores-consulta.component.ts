import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-fornecedores-consulta',
  templateUrl: './fornecedores-consulta.component.html',
  styleUrls: ['./fornecedores-consulta.component.scss']
})
export class FornecedoresConsultaComponent implements OnInit {

  formFornecedor: any;

  constructor() { }

  ngOnInit(): void {
    this.formFornecedor = new FormGroup({
      Nome: new FormControl(null, [Validators.required]),
      NomeFantasia: new FormControl(null, [Validators.required]),
      CEP: new FormControl(null, [Validators.required]),
      Email: new FormControl(null, [Validators.required]),
      TelResponsavel: new FormControl(null, [Validators.required]),
      CelWpp: new FormControl(null, [Validators.required]),
      Observacao: new FormControl(null, [Validators.required]),
      CPFJ: new FormControl(null, [Validators.required])
    });
  }
}
