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

  url = 'https://localhost:44384/api/fornecedores'

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

   ExcluirFornecedor(fornecedorId: number): Observable<boolean>{
    const apiURL = `${this.url}/${fornecedorId}`;
    return this.http.delete<boolean>(apiURL);
   }

   EditarFornecedor(fornecedor: fornecedores): Observable<any>{
    return this.http.put<fornecedores>(this.url, fornecedor, httpOptions);
   }
}
