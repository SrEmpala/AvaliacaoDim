import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fornecedores } from './fornecedores';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-type': 'application/json'}
  )
}

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  url = 'http://localhost:5209/api/fornecedores'

  constructor(private http: HttpClient) { }

    BuscarTodos(): Observable<fornecedores[]>{
      return this.http.get<fornecedores[]>(this.url)
   }

   BuscarId(fornecedorId: number): Observable<fornecedores>{
    const apiURL = `${this.url}/${fornecedorId}`;
    return this.http.get<fornecedores>(apiURL); 
   }

   SalvarFornecedor(fornecedor: fornecedores): Observable<any>{
     return this.http.post<fornecedores>(this.url, fornecedor, httpOptions);
   }
}
