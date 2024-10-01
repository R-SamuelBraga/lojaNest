import { Injectable } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
@Injectable()
export class ProdutoService {
  constructor(private produtorRepository: ProdutoRepository) {}
  private listaProdutos = this.produtorRepository.produtos;

  public salvarProduto(produto) {
    this.listaProdutos.push(produto);
  }
  public listarProdutos() {
    return this.listaProdutos;
  }
}
