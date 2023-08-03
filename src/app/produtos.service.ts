import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { produtos } from './produtos';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-type': 'application/json'}
  )
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url = 'https://localhost:44384/api/produtos'

  constructor(private http: HttpClient) { }

    BuscarTodos(): Observable<produtos[]>{
      return this.http.get<produtos[]>(this.url)
   }

   BuscarId(produtoId: number): Observable<produtos>{
    const apiURL = `${this.url}/${produtoId}`;
    return this.http.get<produtos>(apiURL); 
   }

   SalvarProduto(produto: produtos): Observable<any>{
     return this.http.post<produtos>(this.url, produto, httpOptions);
   }

   ExcluirProduto(produtoId: number): Observable<boolean>{
    const apiURL = `${this.url}/${produtoId}`;
    return this.http.delete<boolean>(apiURL);
   }

   EditarProduto(produto: produtos): Observable<any>{
    return this.http.put<produtos>(this.url, produto, httpOptions);
   }
}
