import { Supplier } from './fornecedor.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private apiUrl = 'http://localhost:3000/fornecedores';

  constructor(private http: HttpClient) {}

  getFornecedores(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.apiUrl);
  }

  getFornecedor(id: number): Observable<Supplier> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Supplier>(url);
  }

  cadastrarFornecedor(fornecedor: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.apiUrl, fornecedor);
  }

  atualizarFornecedor(fornecedor: Supplier): Observable<Supplier> {
    const url = `${this.apiUrl}/${fornecedor.id}`;
    return this.http.put<Supplier>(url, fornecedor);
  }

  excluirFornecedor(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
