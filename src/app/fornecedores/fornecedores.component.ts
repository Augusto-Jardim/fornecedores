import { Component, OnInit } from '@angular/core';
import { Supplier } from './fornecedor.interface';
import { FornecedorService } from './fornecedor.service';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {
  fornecedores: Supplier[] = [];
  novoFornecedor: Supplier = { id: 0, name: '', active: false, category: '', contact: '' };
  fornecedorSelecionado: Supplier | null = null;
  modoEdicao = false;

  constructor(private fornecedorService: FornecedorService) {}

  ngOnInit() {
    this.obterFornecedores();
  }

  obterFornecedores() {
    this.fornecedorService.getFornecedores()
      .subscribe(fornecedores => this.fornecedores = fornecedores);
  }

  cadastrarFornecedor() {
    this.fornecedorService.cadastrarFornecedor(this.novoFornecedor)
      .subscribe(() => {
        this.obterFornecedores();
        this.novoFornecedor = { id: 0, name: '', active: false, category: '', contact: '' };
      });
  }

  atualizarFornecedor() {
    if (this.fornecedorSelecionado) {
      this.fornecedorService.atualizarFornecedor(this.fornecedorSelecionado)
        .subscribe(() => {
          this.obterFornecedores();
          this.cancelarEdicao();
        });
    }
  }

  excluirFornecedor(id: number) {
    if (confirm('Deseja realmente excluir este fornecedor?')) {
      this.fornecedorService.excluirFornecedor(id)
        .subscribe(() => this.obterFornecedores());
    }
  }

  selecionarFornecedor(fornecedor: Supplier) {
    this.modoEdicao = true;
    this.fornecedorSelecionado = fornecedor;
  }

  cancelarEdicao() {
    this.modoEdicao = false;
    this.fornecedorSelecionado = null;
  }
}
