import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProdutosService } from 'src/app/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos-consulta',
  templateUrl: './produtos-consulta.component.html',
  styleUrls: ['./produtos-consulta.component.scss']
})
export class ProdutosConsultaComponent implements OnInit {

  form: any;
  consulta: any;

  constructor(private produtoService: ProdutosService) { }

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

  Consultar(){
    this.produtoService.BuscarTodos().subscribe(res => {
      this.consulta = res;
      console.log(this.consulta);
    });
  }

  ExcluirProduto(Id: number){
    Swal.fire({
      title: 'Deseja Excluir este item?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deletar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.produtoService.ExcluirProduto(Id).subscribe(res => {
          this.Consultar();
        });
        Swal.fire(
          'Item Deletado!',
          '',
          'success'
        )
      }
    })

  }
}
