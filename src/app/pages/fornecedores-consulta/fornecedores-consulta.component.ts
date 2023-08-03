import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FornecedoresService } from 'src/app/fornecedores.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-fornecedores-consulta',
  templateUrl: './fornecedores-consulta.component.html',
  styleUrls: ['./fornecedores-consulta.component.scss']
})
export class FornecedoresConsultaComponent implements OnInit {

  formFornecedor: any;
  consulta: any;

  constructor(private fornecedorService: FornecedoresService) { }

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

  Consultar(){
    this.fornecedorService.BuscarTodos().subscribe(res => {
      this.consulta = res;
      console.log(res);
    })
  }

  ExcluirFornecedor(id: number){
    Swal.fire({
      title: 'Deseja Excluir este item?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deletar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.fornecedorService.ExcluirFornecedor(id).subscribe(res => {
          this.Consultar();
        })
        Swal.fire(
          'Item deletado!',
          '',
          'success'
        )
      }
    })
  }
}
