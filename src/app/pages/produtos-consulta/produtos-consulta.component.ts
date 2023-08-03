import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-produtos-consulta',
  templateUrl: './produtos-consulta.component.html',
  styleUrls: ['./produtos-consulta.component.scss']
})
export class ProdutosConsultaComponent implements OnInit {

  form: any;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      Nome: new FormControl (null, [Validators.required]),
      Referencia: new FormControl (null, [Validators.required]),
      Fornecedor: new FormControl (null, [Validators.required]),
      TipoItem: new FormControl ('P', [Validators.required]),
      CustoCompra: new FormControl(null, [Validators.required]),
      PrecoSaida: new FormControl(null, [Validators.required]),
      Descricao: new FormControl(null, [Validators.required]),
      PesoLiquido: new FormControl(null, [Validators.required]),
      PesoBruto: new FormControl(null, [Validators.required])
    });
  }
}
